// Initialize environmental variables
require('dotenv').config();

const { chat } = require("./src/client");
const { log } = require('./src/utils/util');

/**
 * Send a chat message and log the response
 * @param {string} message - The message to send
 */
async function sendChatMessage(message) {
  try {
    const response = await chat(message);
    console.log(response.text);
  } catch (error) {
    log.error(error)
  }
}

// sendChatMessage("Can you get some holidays for me in pakistan?");

module.exports = {
  chat,
};
