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

## Additional examples from the workshop
![0](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/0950e713-e4cc-4dd3-8bcc-7f7d2eac0afd)
![1](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/c9789275-c6ca-4cc5-96c8-dc3d58411f53)
![2](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/c6077fd4-0798-4c8c-a292-b1823763983d)
![3](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/1bec415f-94fb-4147-a40c-1ebd66ea8cec)
![4](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/51363a10-988b-43df-a304-41129269eff5)
![5](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/7742d242-1d0a-4496-87a5-1a33bc46dc79)
![6](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/0096dd61-9e9a-41e2-ac36-6c0d15ef2287)
![7](https://github.com/rootstrap/react-native-bad-ux-challenge/assets/14322814/ba1d16f2-516e-4ea7-b30d-62aa4411a067)
