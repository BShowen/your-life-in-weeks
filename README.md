![Your life in weeks](https://github.com/BShowen/your-life-in-weeks/blob/main/readmeImages/YLIW.png Your Life In Weeks)

## Project: Your life in weeks.  
The idea here is that you can track different life events using a life calendar. This calendar shows 100 years, starting on your birthday. Each year is broken into its weeks. When you view an event on your calendar the weeks will be filled in to show you how long this event has been happening. 

###### View this app live [here](https://bshowen.github.io/your-life-in-weeks/)
## 🙌 Project goal: 
This app was heavily inspired by the folks over at [kurzgesagt](https://shop-us.kurzgesagt.org/products/lifespan-calendar-poster?variant=39451596423216), specifically their [lifespan calendar poster](https://shop-us.kurzgesagt.org/products/lifespan-calendar-poster?variant=39451596423216). I wanted to try to recreate this poster and turn it into a simple webapp. I think it turned out great! 

# 🧠 What I learned in this project
- I learned all about the lifecycle of react components and all the methods that go long with the component lifecycle. 
- The main lifecycle method that I used was `shouldComponentUpdate()`. This app has over 5200 dom elements that React tries to re-render on every update. This is very slow! Not every element needs to be re-rendered. I use the `componentShouldUpdate()` method to diff the props and let React know if this component should update. 
- I also got myself familiar with controlled and uncontrolled components. I use controlled components for all of the forms in this app. 
- I also found some cool resources while building this app. 
  - [React Icons](https://react-icons.github.io/react-icons/) is super cool! It is a npm package that lets you use icons from Bootstrap, FontAwesome and many others, all in one place.
  - I also used the npm package `react-bootstrap` to style some of my components. I used this mainly for styling forms and form inputs. I used Bootstrap for my layout and positioning, and them I themed this app very similar to the [Kurzgesagt](https://kurzgesagt.org/about/) website. 


# 📝 Notes for myself
- This app is mobile friendly, however, its hard to display 52 squares in a row on a mobile device. So the mobile UI could use some redesign. Viewing this app on a desktop looks great. 