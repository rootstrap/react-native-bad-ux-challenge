# rn-animation-bad-ux-challenge
Bad UX challenge: Animations made with react-native-reanimated 

This Project was created to have all the animations we created for the Bad UX Challenge proposed in the React Native Reanimated Course in one place. 

## Steps to run this app:

1. Clone this repo
2. `yarn install` or just `yarn`
3. `cd ios && pod install && cd ..`
4. `yarn ios` or `yarn android`

## Example Animation

As you can see when you run the app, an example animation is already included. You can check the code inside `src/screens/ManuGenia`. 

https://github.com/rootstrap/rn-animation-bad-ux-challenge/assets/8755889/b0202558-bdbf-48a4-9392-399c2ffc875b

## Steps to add your Animation:

1. Inside `src/screens` create a folder with your name/nickname and include your animation screen (you can add index.js and styles.js files)
2. Inside `src/constants/screens.js` add a constant for your id (name/nickname):  `export const MANU_GENIA = 'ManuGenia';`
3. Add your screen to the `App.js` file. Remember to import your component, the screen constant, and set the title you want for your screen.

```js
<Stack.Screen
  name={MANU_GENIA}
  component={ManuGenia}
  options={{headerTitle: 'How Old Are You?'}}
/>
```

4. Inside `src/screens/Dashboard/index.js`, add a button that navigates to your screen (set your name/nickname as the button's text) :
   
`<Button text="Manu 🧞‍♀️" onPress={() => navigate(MANU_GENIA)} />`

5. Test your animation to check everything works 💪
6. Push your branch and create a Pull Request from your branch to main

Thanks for participating! Hope you enjoyed the workshop and the final project 💜
