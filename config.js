const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_02_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3VEtlUFUwaUo3b09STDhRVmE3bG05R0pmZjh3ZElqRU9BQzlKN0RqSzFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4UTJxZjZ6S1QzV1dGck1ZWnJRdXd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUxNzUxYzU1LTAzY2EtNGIxNS04NDY4LWM2M2VjM2I4ZmQ4MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDE1MixcbiAgICAgIDEyLFxuICAgICAgNzAsXG4gICAgICAxOTIsXG4gICAgICA2MyxcbiAgICAgIDEyMSxcbiAgICAgIDUxLFxuICAgICAgNzMsXG4gICAgICAxOTMsXG4gICAgICA0MixcbiAgICAgIDIzMSxcbiAgICAgIDIzMyxcbiAgICAgIDE1MSxcbiAgICAgIDY4LFxuICAgICAgMjE0LFxuICAgICAgMTU5LFxuICAgICAgMjM2LFxuICAgICAgMTMzLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTUzLFxuICAgICAgOTQsXG4gICAgICA0NixcbiAgICAgIDEzNCxcbiAgICAgIDI1LFxuICAgICAgMjA3LFxuICAgICAgMTY1LFxuICAgICAgMTEzLFxuICAgICAgMTY2LFxuICAgICAgNDYsXG4gICAgICAzOSxcbiAgICAgIDM5LFxuICAgICAgMjA3LFxuICAgICAgNixcbiAgICAgIDE1MixcbiAgICAgIDEyMCxcbiAgICAgIDQ0LFxuICAgICAgMjAwLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBMRFNSTTlEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQxMTAwNzA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4MDE4MDQ1MTYxNzE0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2VBZ0lvQ0VLL3BtN3NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnZExwYXY4YUE0K1NBMTRGNVN1SUpFMktqbWxpTC9DSzFlQ0puOGNudUdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBxSStTTG53SFh3WVVpN2lLcUF2TTFJUTFMNjZ4Zkl3MS9zK2lpbTQ0S2xMbUxycEpSYlo0TWRtemFaa3ZWT3FodXJDcHNuNVl2aWNhTGZLUUwrWkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhXMEpVYVByb3l4a0N3MnhjOEdheGhMcnpKNnNyeU8wRTBoN0x4ekF5SkxYeC9kTC9xL3A1Zk1CTnBiUmx6NlZwdUdLK3JyeXhheEx6N2Z0UnRHRkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDExMDA3MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDgwMDU2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1kZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWRlLmpzb24iOiAie1wia2V5RGF0YVwiOlwibzUwRXQ0RWFUbzFqUWFFTk9raDBzUTQzOVVxNWlic09EZi9PM1o0YXlJZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTc4NDI0NzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUzMTYwMzk5MlwifSIKfQ==

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
