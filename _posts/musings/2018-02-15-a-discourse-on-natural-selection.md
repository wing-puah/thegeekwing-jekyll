---
title:  "A discourse on natural selection"
date:   2018-02-13 14:36:49 +0800
categories:
  - "Musings"
  - "Technology"
banner: "/blog/2018/02/love-and-heart.jpg"
tags: [algorithm, programming, lame computation]
description: Computing the cycle of love - For the unromantics
---

It seems adequate to be writing an article on natural selection, post festive-of-love, Valentine's day. Love in society holds an important function to ensure the survivability of human kind, maybe not so much for other species, I don't know. However, to declare that a relationship could be maintained just through the fuzzy word of love is an overstatement.

Although cold and overly pragmatic, I think the reason of existence of love mainly revolves around the fact that it is an evolution of natural selection.

## Natural selection
Philosophers have long pondered about the natural processes. Darwin set out his theory of evolution by natural selection in 1859. Biologists continue to refine evolution and natural selection, coming out with various models and theories of various dynamics. When I first read the book, The Price Of Altruism: George Price and the Search for the Origins of Kindness, I was enthralled by the theories represented in the books. To be honest, I can't remember much about the theories, but the idea that one could compute human behavior at large is pretty a new concept to me at that point of time.

An interesting concept that has slipped off my mind nevertheless. It must have been at least 3 years since I last read that book. I used to work with animals, that's why I love to deduce the reasons behind certain behaviors. That is the only way we could apply corrective behavior measures to the animals in a way that is positive and affirmative.

## The cycle of life
Every cause has an effect. Every action, no matter how irrational, could be linked back to a point, or certain points. On identifying the rational of the actions, we could then choose our next course of actions: be it to transform or accept it. These seemingly random thoughts sprang from a whatsapp conversation with an acquaintance that I have never met.

<blockquote>
Person A: Maybe u just haven't chance upon ur match.<br/>
Me: Haha. Maybe, maybe not. Let's say if the function of getting into a relationship is for companionship and for some people, procreation. If one does not have say desires, then one will not have a "match" because no conditions are set in the first place.
</blockquote>

Oh yes, you do just right if you are sensing my anal-ity. Justifying my obscure thinking aside, singlehood FTW, this conversation lead me to think. What will happen if I try to output this thought process into something a little more tangible? The sentence sounds a lot like something programmable, so that's about what I am going to do.

## Lame-ness strike
Once in a while, we need to be a bit lame and a bit silly. Try not to take life too seriously, except when it is neccessary. So this is what I come out with. This is going to be some grossly simplified and very imperfect code. No time to refactor.

Firstly, we define the conditions required. Then we create personA and define the conditions. And we define his/her potential match, PersonB. hW, wW and hoW stands for height weightage, weight weightage and hobby weightage respectively.
<script src="https://gist.github.com/wing-puah/7e70abb1edce6b615827158d0f3fbf94.js?file=define-condition"></script>

Next, basic comparison that is needed to determine if the match is a good match. Over here, we assume that as long as the conditions of personB are greater than the conditions set by personA. I have also included the function for the final check over here.
<script src="https://gist.github.com/wing-puah/7e70abb1edce6b615827158d0f3fbf94.js?file=add-basic-comparison"></script>

However, there is one caveat. Inside the conditions, there is a condition, hobby, that does not work with number. Hence, we have to do a separate check to see if the conditions match with each other. Here, I got a bit lazy and I just include the condition in the main chunk of the code. Since hobby is in index 2, this number is hardcoded in as well. If the conditions match, the system returns a value of 1. If not, it returns a value of 0.
<script src="https://gist.github.com/wing-puah/7e70abb1edce6b615827158d0f3fbf94.js?file=check-hobby-match"></script>

Now, we are going to see the comparison code from the 2 snippets above coming into action. There is a whole lot of things going on here. But the basis is if condition 1, i.e. the height of personB, is greater than what personA has stipulated, it will return a result of 1. If not, it will return a result of 0.

Using the example above, the conditions will return an array of [1, 1, 0]. Let's name this array scoreMultiplication.

Then we multiply the scoreMultiplication array with the weightage stipulated by PersonA. For the above value, we will expect a return of [0.4, 0.3, 0] since the last condition is not fulfill. With this array, we calculate the sum of scoreMultiplication with the total weightage (i.e. 0.4 + 0.3 + 0.5). We convert this number to a percentage. Over here, we will also include the final comparison function by determining if personB is a good match.
<script src="https://gist.github.com/wing-puah/7e70abb1edce6b615827158d0f3fbf94.js?file=calculate-score"></script>

Finally, we will call upon the whole function to see the results. And it will returns that PersonB is a good match for PersonA.
<script src="https://gist.github.com/wing-puah/7e70abb1edce6b615827158d0f3fbf94.js?file=display-results"></script>

There, we have it. My thoughts on natural selection with modern day dating. As much as I don't believe in modern day romantic love, I do believe that it is achievable by most individuals if one chooses to work towards it. If you have find your match, don't give up. Maybe you can try to relook into your conditions and weightage chart ;).
