import MarkdownRenderer from '../../components/MarkdownRenderer';

const AoiTranscriptFunc = () => {
  const markdownSource = `
# Aoi.js Transcript Function
This is a custom function for aoi.js, You need custom function handler to use this function if you dont know how to change the code.

\`\`\`js
module.exports = { 
 name: "$transcript", 
 type: "djs",
 code: async d => { 
  const data = d.util.aoiFunc(d) 

 const discordTranscripts = require('discord-html-transcripts'); 

 const channel = d.message.channel; // or however you get your TextChannel 

 // Must be awaited 
 const attachment = await discordTranscripts.createTranscript(d.message.channel, {
    limit: 50, //the number of messages to be transcribed
    returnType: 'attachment', //the type of transcript file to be sent
    saveImages: true, //save image or not?
    footerText: "Exported {number} message{s}", //footer text for your transcript
    poweredBy: true //optional, see example at discord-html-transcript package docs
});

 channel.send({ 
  files: [attachment] 
 });   
 return { 
 code: d.util.setCode(data) 
 } 
 } 
 }
\`\`\`
`;

  return (
    <div className="codeblock img-code">
      <MarkdownRenderer source={markdownSource} />
    </div>
  );
};

export default AoiTranscriptFunc;