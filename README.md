# Reading Material Using API's Week 2

## Agenda

These are the topics for week 2:

1. [Application Programming Interface (API)](https://study.hackyourfuture.net/#/the-internet/api)
   - Public/private APIs
   - Connecting with APIs
2. [Fetch API](https://study.hackyourfuture.net/#/the-internet/fetch)
3. [Async/Await](https://study.hackyourfuture.net/#/javascript/modern-js)
   - Catching errors with try/catch
4. [Career Training I](https://github.com/HackYourFuture/yourpersonalbrand): Not all at once!

## Week goals

All of the detailed information about every concept is in your study book. The following goal explanation will link you to the correct place to get studying. Read through the goal description once to get an idea of what you will be learning, then go through the different links (either from the agenda or this goal list).

This week we finally get to learn what an API is although you will probably already have an idea. Read through the thorough explanation [here](https://study.hackyourfuture.net/#/the-internet/api). Now that we know what we are doing, let's learn how to do it!

There are many ways to request data from an API, initially everything was done using [XMLHttpRequest](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest), but that is now hardly used anymore. It's good to know it exists and you will see it in some videos but it is not something to focus on. Then libraries like [Axios](https://github.com/axios/axios) were created to make it easier to use. These days all modern browsers, however, have a [Fetch API](https://study.hackyourfuture.net/#/the-internet/fetch) built in that makes it even easier to connect to API's from your frontend application. So for our curriculum we are only going to focus on the Fetch API and just mention the other ways so that you know what people are talking about when you hear that term.

Last week we learned about Promises and with the increased use of promises, modern JavaScript introduced some new syntax that can be used with those promises. Have a look at the section on Async/await in the modern JavaScript page of your study book [here]((https://study.hackyourfuture.net/#/javascript/modern-js)) now that you know what promises are so that you know what it does.

You will probably ask yourself now which way is best to handle asynchronous code and the answer is that there is no best way. Generally callbacks are great for simple applications, but get into callback hell if stuff gets too complicated. Promises with `.then` chains are great for more complex situations where the chaining can be very powerful, but can be a little hard to follow for people who do not have much experience with them. Using async/await makes the code look a little more synchronous again and that can make it easier to follow. It does, however, make it a little more complex to handle errors or situations where something absolutely needs to be done (a `finally` is invaluable in these situations). So, it is up to you to decide based on the situation what to use.

## Career Training I (Your personal brand)

Since you completed Browsers, you now have a first project to write down on your CV! You will add many more in the future, as you progress in your abilities. It is therefore time to start thinking about all of the steps required to start the job search and to get accepted to your first programming job. The first step will be handled in the Career Training I: _your personal brand_. We will cover how to present your CV, GitHub, LinkedIn, etc. to that they stand out. These are the first things employers will look at, so they convey a first impression of you and has to be great! We have compiled a big list of information about how to go about creating your personal brand in [this repo](https://github.com/HackYourFuture/yourpersonalbrand).

### Career Training I: Planning

You don't have to do all of this immediately. Somewhere this week you will receive a message in your cohort channel from Giuseppina to plan the Career Training I. *Before* that session, make sure to have:
- Read the whole [personal brand repository](https://github.com/HackYourFuture/yourpersonalbrand).
- Done the [assignment](https://github.com/HackYourFuture/yourpersonalbrand/blob/main/yourcurriculum.md#4-submitting-your-cv-to-the-hyf-team) for the repository.
