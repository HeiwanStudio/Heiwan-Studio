<template>
  <div class="story">
<!--    <StoryChoiceButton @click.native="startJourney">Start Journey</StoryChoiceButton>-->
<!--    <StoryPrompt v-if="prompt" :text="prompt"></StoryPrompt>-->
<!--&lt;!&ndash;    <StoryChoiceButton v-for="(text, key) in choices" :choice="key" @click.native="feedChoice(key)">{{ text }}</StoryChoiceButton>&ndash;&gt;-->
<!--    <StoryChoiceButton choice="B" @answer="feedChoice($answer)">B</StoryChoiceButton>-->
<!--    <StoryChoiceButton choice="C" @answer="feedChoice($answer)">C</StoryChoiceButton>-->
<!--    <StoryChoiceButton choice="D" @answer="feedChoice($answer)">D</StoryChoiceButton>-->
  </div>
</template>

<script>
// import {Configuration, OpenAIApi} from "openai";
//
// export default {
//   data() {
//     return {
//       openai: null,
//       prompt: null,
//       choices: '',
//       image_prompt: '',
//       health: 100,
//       selectedChoice: '',
//       prevAnswer: '',
//       prevPrompt: '',
//     }
//   },
//   mounted() {
//     const configuration = new Configuration({
//       organization: "org-aP6z0tJsm4QPGE4VgLIud0S2",
//       apiKey: "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",
//     })
//     this.openai = new OpenAIApi(configuration)
//   },
//   computed: {
//     addToPrompt() {
//       return ` ### ${this.prevPrompt} ### ${this.prevAnswer} ### `
//     }
//   },
//   methods: {
//     async generateResponse(prompt) {
//       const model = 'text-davinci-003'
//       const temperature = 0.4
//       const max_tokens = 3200
//       // Set the conversation history as the context
//       const contextPrompt = `If ${this.addToPrompt} and I choose ` + prompt
//
//       console.log(contextPrompt)
//
//       // Use the prompt and context to generate a response
//       const response = await this.openai.createCompletion({
//         model: model,
//         prompt: contextPrompt,
//         temperature: temperature,
//         max_tokens: max_tokens,
//       })
//       this.prevPrompt = prompt
//       const jsonifiedData = JSON.parse(response.data.choices[0].text)
//       this.prevAnswer = jsonifiedData.image + jsonifiedData.prompt
//       this.prompt = jsonifiedData.prompt
//       this.choices = jsonifiedData.choices
//       this.image_prompt = jsonifiedData.image
//       console.log(response)
//       try {
//         return jsonifiedData
//       } catch (error) {
//         console.log(error)
//       }
//     },
//
//     async startJourney() {
//       console.log('testt')
//       // const prompt = 'You are a text-based adventure game. give me 4 choices a - d'
//       const prompt = 'You are a a text-based adventure game. Give me answers in json format where the keys are: image, prompt, 4 choices, health.' +
//         'image is a short piece of text that describes the scene using keywords' +
//         'prompt is a message describing the scene in detail and a question presented to the player that guides their actions in the game and helps to keep them engaged in the story. This doesnt include the choices' +
//         'choices labeled a to d' +
//         'health is a numerical value representing the players vitality. The game ends if the player loses all health. It starts with 100'
//
//       const answer = await this.generateResponse(prompt)
//       //
//       console.log(answer)
//       //
//       const answer2 = await this.generateResponse(this.choices['a'])
//       //
//       console.log(answer2)
//
//     },
//     // async feedChoice(choice) {
//     //
//     //   const API_KEY = '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'
//     //   const model = 'text-davinci-003'
//     //   const prompt = choice
//     //   console.log(choice)
//     //   const temperature = 0.3
//     //   const max_tokens = 7
//     //
//     //   const data = { model, prompt, temperature, max_tokens }
//     //
//     //   fetch('https://api.openai.com/v1/completions', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //       Authorization: `Bearer ${API_KEY}`
//     //     },
//     //     body: JSON.stringify(data)
//     //   })
//     //     .then(response => response.json())
//     //     .then(data => {
//     //       console.log(data)
//     //     })
//     //     .catch(error => {
//     //       console.error(error)
//     //     })
//     // }
//   }
// }


</script>
