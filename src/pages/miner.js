import React, { useState, useEffect } from "react";
import { setVar, getVar, all, reset } from "../lib/storage.js";

const items = ["stone", "coal", "gold", "diamond", "emerald", "iron", "sapphire", "dirt"];
const pickaxes = [
  { name: "stone", miningAbility: 1 },
  { name: "iron", miningAbility: 5 },
  { name: "gold", miningAbility: 10 },
  { name: "diamond", miningAbility: 50 },
  { name: "emerald", miningAbility: 100 },
  // add more pickaxes here
];
const bags = [
  { name: "basic", capacity: 10 },
  { name: "wooden", capacity: 20 },
  { name: "iron", capacity: 50 },
  { name: "gold", capacity: 100 },
  { name: "diamond", capacity: 500 },
  // add more bags here
];

const Game = () => {
  const [inventory, setVarInventory] = useState({});
  const [money, setVarMoney] = useState(0);
  const [currentPickaxe, setVarCurrentPickaxe] = useState(pickaxes[0]);
  const [currentBag, setVarCurrentBag] = useState(bags[0]);
  const [multiplier, setVarMultiplier] = useState(1);
  const [token, setVarToken] = useState(0);
  const [blockMined, setVarBlockMined] = useState(0);
  const [rebirthCount, setVarRebirthCount] = useState(0);

  useEffect(() => {
    const savedData = all();
    setVarInventory(savedData.inventory || {});
    setVarMoney(savedData.money || 0);
    setVarCurrentPickaxe(pickaxes.find((pickaxe) => pickaxe.name === savedData.currentPickaxe) || pickaxes[0]);
    setVarCurrentBag(bags.find((bag) => bag.name === savedData.currentBag) || bags[0]);
    setVarMultiplier(savedData.multiplier || 1);
    setVarToken(savedData.token || 0);
    setVarBlockMined(savedData.blockMined || 0);
    setVarRebirthCount(savedData.rebirthCount || 0);
  }, []);

  useEffect(() => {
    setVar("inventory", inventory);
    setVar("money", money);
    setVar("currentPickaxe", currentPickaxe.name);
    setVar("currentBag", currentBag.name);
    setVar("multiplier", multiplier);
    setVar("token", token);
    setVar("blockMined", blockMined);
    setVar("rebirthCount", rebirthCount);
  }, [inventory, money, currentPickaxe, currentBag, multiplier, token, blockMined, rebirthCount]);

  const mine = () => {
    const minedItem = items[Math.floor(Math.random() * items.length)];
    const newInventory = { ...inventory };
    if (newInventory[minedItem]) {
      newInventory[minedItem] += 1;
    } else {
      newInventory[minedItem] = 1;
    }
    setVarInventory(newInventory);
    setVarBlockMined(blockMined + 1);
  };

  const sellItem = (itemName) => {
    const itemValue = getVarItemValue(itemName);
    const itemAmount = inventory[itemName];
    const newInventory = { ...inventory };
    newInventory[itemName] = 0;
    setVarInventory(newInventory);
    setVarMoney(money + itemValue * itemAmount * multiplier);
  };

  const upgradePickaxe = () => {
    const nextPickaxeIndex = pickaxes.findIndex((pickaxe) => pickaxe.name === currentPickaxe.name) + 1;
    if (nextPickaxeIndex < pickaxes.length) {
      const nextPickaxe = pickaxes[nextPickaxeIndex];
      if (money >= nextPickaxe.miningAbility * 1000) {
        setVarCurrentPickaxe(nextPickaxe);
        setVarMoney(money - nextPickaxe.miningAbility * 1000);
      }
    }
  };

  const upgradeBag = () => {
    const nextBagIndex = bags.findIndex((bag) => bag.name === currentBag.name) + 1;
    if (nextBagIndex < bags.length) {
      const nextBag = bags[nextBagIndex];
      if (money >= nextBag.capacity * 100) {
        setVarCurrentBag(nextBag);
        setVarMoney(money - nextBag.capacity * 100);
      }
    }
  };

  const buyMultiplier = () => {
    if (token >= 10000) {
      setVarMultiplier(multiplier * 2);
      setVarToken(token - 10000);
    }
  };

  const rebirth = () => {
    if (blockMined >= 1000000 * Math.pow(10, rebirthCount)) {
      reset();
      setVarRebirthCount(rebirthCount + 1);
      setVarToken(token + 10);
    }
  };

  const getVarItemValue = (itemName) => {
    switch (itemName) {
      case "stone":
        return 1;
      case "coal":
        return 2;
      case "gold":
        return 10;
      case "diamond":
        return 50;
      case "emerald":
        return 100;
      case "iron":
        return 5;
      case "sapphire":
        return 20;
      case "dirt":
        return 0.5;
      default:
        return 0;
    }
  };

  return (
    <div>
      <h1>Idle Miner Game</h1>
      <p>Money: {money}</p>
      <p>Token: {token}</p>
      <p>Block mined: {blockMined}</p>
      <p>Rebirth count: {rebirthCount}</p>
      <button onClick={mine}>Mine</button>
      <h2>Inventory</h2>
      {Object.entries(inventory).map(([itemName, itemAmount]) => (
        <div key={itemName}>
          <p>{itemName}: {itemAmount}</p>
          <button onClick={() => sellItem(itemName)}>Sell {itemName} for {getVarItemValue(itemName) * itemAmount * multiplier}</button>
        </div>
      ))}
      <h2>Upgrades</h2>
      <div>
        <p>Current pickaxe: {currentPickaxe.name} (mining ability: {currentPickaxe.miningAbility})</p>
        <button onClick={upgradePickaxe}>Upgrade pickaxe for {currentPickaxe.miningAbility * 1000}</button>
      </div>
      <div>
        <p>Current bag: {currentBag.name} (capacity: {currentBag.capacity})</p>
        <button onClick={upgradeBag}>Upgrade bag for {currentBag.capacity * 100}</button>
      </div>
      <div>
        <p>Multiplier: {multiplier}</p>
        <button onClick={buyMultiplier}>Buy multiplier for 10000 token</button>
      </div>
      <div>
        <button onClick={rebirth}>Rebirth for 10 token (need to mine {1000000 * Math.pow(10, rebirthCount)} blocks)</button>
      </div>
    </div>
  );
};

export default Game;
