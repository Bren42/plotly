# plotly

## Belly Button Biodiversity 

### Analysis Purpose

The analysis was designed to create a quick way for those performing the study to look into each volunteer participant to see if would have the needed bacteria's to study for the final product. 

To do this we needed to take the data supplied to us in the JSON format and build it into a dynamic webpage using HTML,CSS, D3 and javascript. We needed a way for someone to pull up the test subject number and see charts related to the top 10 bacteria, the cultures per sample, and the frequency of the test subjects washing frequency. We we also requested to customize 3 elements in the page to give it more visual flair.

We started with the demographics panel to give the users a way to select from a drop down and immediately see the critical test subject data.
This output was customized in the CSS style sheet to bold the demograpic text.

![This is an image](https://github.com/Bren42/plotly/blob/main/images/demographics.png?raw=true)

Once selected the user would see the first graph which would list the top ten bacterias of the test subject.
I added a descriptor paragraph HTML item at the bottom of the graph to customize this output and make it easier for the user to understand what they were looking at.

![This is an image](https://github.com/Bren42/plotly/blob/main/images/top_ten.png?raw=true)

We then moved to the wash frequency, which is important as a measure of time that the bacteria has to grow, it may even have correlation to the cultures per sample outcomes. 

This was also customized so that it has a description below the gauge.

![This is an image](https://user-images.githubusercontent.com/105946959/193912872-3ab1bb86-a422-48a5-91f1-02ea190ea698.png)

The last item we added was the bubble chart where we show the different bacteria samples and use a dynamic scale to visually represent the relative amount per bacteria.

I added a description below this element as well to describe what was being viewed.

![This is an image](https://github.com/Bren42/plotly/blob/main/
images/cultures_per_sample.png?raw=true)

Finally we added a few more visual customizations. 

1. In the CSS file we changed the font style to Bauhaus 93 for the jumbotron text and added a custom image, I also added a darken tint to the image to make the text less difficult to read and moved the second line of text down.

2. All three charts were realigned in spacing within each items HTML container.

3. I changed the background color of the page to aliciablue.

4. I also went back into the JS code and under each charts layout variable I made the chart transparent so it would blend in with the page background.

![This is an image](https://github.com/Bren42/plotly/blob/main/static/images/transparent.png?raw=true)

If you would like to view the page and its functionality I have created a github page for it.

Here is the webpage version of this readme: https://bren42.github.io/plotly/

Here is the link to the belly button biodiversity page: https://bren42.github.io/plotly/static/


