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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_23_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImQ3T0dmcjVpR0g3Rm0yOVJSYVoxeEp4TlhKeUFLUUc4TDY1bFlFTGhmMmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpQU1g3THVMUTBhMmNDeTJVMjFXamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTBhZWI5Y2EtNGYzZi00YWRhLWIzNGMtNGJhN2M2ZGI4NjhjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDIzMyxcbiAgICAgIDE2NyxcbiAgICAgIDU3LFxuICAgICAgMTMyLFxuICAgICAgMjM4LFxuICAgICAgMjM5LFxuICAgICAgMTQsXG4gICAgICAyMjksXG4gICAgICAxOTUsXG4gICAgICA3OCxcbiAgICAgIDk1LFxuICAgICAgMTEsXG4gICAgICA2LFxuICAgICAgNDIsXG4gICAgICAyNDQsXG4gICAgICAxMTcsXG4gICAgICAxMTYsXG4gICAgICAyMjksXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTE5LFxuICAgICAgMTQzLFxuICAgICAgNTYsXG4gICAgICAyNDcsXG4gICAgICAyMzYsXG4gICAgICAxMjMsXG4gICAgICAxMixcbiAgICAgIDE5MCxcbiAgICAgIDAsXG4gICAgICAxNzMsXG4gICAgICA3MyxcbiAgICAgIDEzMyxcbiAgICAgIDE0NyxcbiAgICAgIDI1MixcbiAgICAgIDIwMCxcbiAgICAgIDEyNyxcbiAgICAgIDI0MixcbiAgICAgIDc0LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFCOUhYWlpWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQxMTAwNzA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4MDE4MDQ1MTYxNzE0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2VBZ0lvQ0VKYVBuTHNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnZExwYXY4YUE0K1NBMTRGNVN1SUpFMktqbWxpTC9DSzFlQ0puOGNudUdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpYcW5QWWwyYndHZU8wQ0x5NXZvRWVKWi9UWEhwYzZmdldnNndGcXl1ckkreWZlQzZOYVVQK1RwVFpTWjVxR3hVOUVzWHN6M29LektRby9YVDZXWEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImd5OExHOXQ4K001a3Q0MGRJQ3B5Z0RVWVNmTVZMK3U4K3NtMXZFY2RXenBSMzE3U0k2S0RRSFNiWDJGSGc0Qk13RmhBbWJZS0FuWWN1YzJWVWRXbkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDExMDA3MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDgwNTQwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1kZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWRmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ1FDb0lFMWVOL3FVc1lLWmFSWHRNcWJqYlZFQnorZmF0UnRtVEVxczVpND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTc4NDI0NzEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDgwNTEwNDkzMFwifSIKfQ=="  // PUT your SESSION_ID 


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
