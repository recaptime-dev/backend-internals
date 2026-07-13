/**
 * 
 * @param {string} target
 * @param {EmailEvent} message
 */
async function forwardToEach(target, message) {
  for (const email of crewInboxes[target]) {
    await message.
  }
}

export default {
  async email(message, env, ctx) {
    /**
     * Create your code
     */
  },

  async request(env, ctx) {

  }
}
