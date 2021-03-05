const Discord = require(`discord.js`);
const fs = require(`fs`);

module.exports = async(client) => {

    const guild = client.guilds.cache.get("serverGuildId");

    const channel = guild.channels.cache.get("logsChannelId");

    const command = fs.readFileSync.filter(file => file.endsWith === `.js`);


    const prefix = "your bot prefix";

    client.on(`message`, async(message) => {


        guildAuditLogs() = {

            MESSAGE_ID: message.id,
            CHANNEL_ID: channel.id,
            GUILD_ID: guild.id,
            MESSAGE_DELETE: FALSE,
            MANAGE_MESSAGES: FALSE,
            MANAGE_WEBHOOKS: FALSE,
            MANAGE_CHANNELS: FALSE,
            MANAGE_SERVER: FALSE,
            MOVE_MEMBERS: FALSE,
            DEAFEN_MEMBERS: FALSE,
            ADMINISTRATOR: FALSE,
            MANAGE_ROLES: FALSE,
            MANAGE_MEMBERS: FALSE,
            MUTE_MEMBERS: FALSE




        }

        const messageTime = message.joinedTimeStamp(Date.now - 5000);





        if (message.member.hasPermission("MANAGE_SERVER")) {

            guildAuditLogs.MANAGE_SERVER = true;

        } else if (message.member.hasPermission("MANAGE_ROLES")) {

            guildAuditLogs.MANAGE_ROLES = true;

        } else if (message.member.hasPermission("MANAGE_WEBHOOKS")) {

            guildAuditLogs.MANAGE_WEBHOOKS = true;

        } else if (message.member.hasPermission("MOVE_MEMBERS")) {

            guildAuditLogs.MOVE_MEMBERS = true;

        } else if (message.member.hasPermission("MANAGE_MEMBERS")) {

            guildAuditLogs.MANAGE_CHANNELS = true;

        } else if (message.member.hasPermission("DEAFEN_MEMBERS")) {

            guildAuditLogs.DEAFEN_MEMBERS = true;

        } else if (message.member.hasPermission("MUTE_MEMBERS")) {

            guildAuditLogs.MUTE_MEMBERS = true;

        } else if (message.member.hasPermission("ADMINISTRATOR")) {

            guildAuditLogs.ADMINISTRATOR = true;
        }


        //message logs

        if (message.delete()) {

            const messageLogsEmbed = new Discord.MessageEmbed()
                .setTitle("message logs")
                .setDescription(message.id, message.author, message.author.user.username, messageTime)
                .setColor("embedcolor")

            await channel.send(messageLogsEmbed)

            guildAuditLogs.MESSAGE_DELETE = true;

            if (err) {
                throw err;
            }
        }
        if (guild.message.send) {

            const messageChannel = message.author.channel;

            const messageLogsEmbedCreate = new Discord.MessageEmbed()
                .setTitle("message logs")
                .setDescription(`a message has been created in ${messageChannel}, message owner: ${message.author.user}`);

            if (err) {
                throw err;
            }
        }

        // voiceChannel logs

        client.on(`guildVoicechannelUpdate`, (oldMember, newMember) => {

            let oldUserChannel = oldMember.channelId;
            let NewUserChannel = newMember.channelId;

            if (NewUserChannel === "voice channel id") {

                const voiceChannelLogsEmbed = new Discord.MessageEmbed()
                    .setTitle("voice channel logs")
                    .setDescription(`user ${newMember} joined the channel ${NewUserChannel}`)

                channel.send(voiceChannelLogsEmbed)

                console.log(`a user joined a channel ${NewUserChannel}`)

                if (err) {
                    throw err;
                }


            } else {

                const voiceChannelLogsEmbedLeft = new Discord.MessageEmbed()
                    .setTitle("voice channel logs")
                    .setDescription(`user ${oldMember} left the channel ${oldUserChannel}`)

                if (err) {
                    throw err;
                }
            }



        });

        // roles logs

        client.on(`guildRolesUpdate`, (oldRoles, newRoles, member) => {

            let userOldRoles = oldRoles.roles.remove;
            let userNewRoles = newRoles.roles.add;
            let userRoles = oldRoles.roles;

            if (userNewRoles != oldRoles.roles) {

                const rolesLogsEmbed = new Discord.MessageEmbed()
                    .setTitle("roles logs")
                    .setDescription(`the user ${member} got roles: ${userNewRoles}`)

                console.log(`the user ${member} got roles: ${userNewRoles}`);

                if (err) {
                    throw err;
                }

                channel.send(rolesLogsEmbed);

            } else if (userOldRoles = userRoles) {

                const rolesLogsEmbedRemove = new Discord.MessageEmbed()
                    .setTitle("roles logs")
                    .setDescription(`the user ${member} got roles ${userRoles} removed, now he have roles: ${userOldRoles}`)

                console.log(`the user ${member} got roles ${userRoles} removed, now he have roles: ${userOldRoles}`)

                channel.send(rolesLogsEmbedRemove)

                if (err) {
                    throw err;
                }
            }

        })

        //command logs

        if (message.content.startsWith(prefix) + command) {

            const userCommand = message.author;

            const commandLogsEmbed = new Discord.MessageEmbed()
                .setTitle("command logs")
                .setDescription(`the user ${userCommand} used the command: ` + message.content);

            console.log(`the user ${user} used the command: ` + message.content);
            channel.send(commandLogsEmbed);

            if (err) {
                throw err;
            }
        }

        // channel logs



        if (guild.channels.create()) {

            const channelCreateEmbed = new Discord.MessageEmbed()
                .setTitle("channel logs")
                .setDescription(`a channel has been created, channel name: ${guild.channels.name}`);

            console.log(`a channel has been created, channel name: ${guild.channels.name}`);
            channel.send(channelCreateEmbed)

            if (err) {
                throw err;
            }
        }










    })
}