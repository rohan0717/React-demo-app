#### DEMO Streaming App

The Streaming App has been divided into components, containers and hoc :

### Components Used
  1. Footer -- Displays the the list of internal pages seperated with '|' ( PageLinks Component Used)
            -- Displays the copyright notice
            -- Social Icons are shown using  SocialLinks Component
            -- App Store Icons are shown using StoreLinks Component
            -- SocialLinks component is customizable - the icons are shown according to the props sent to it.
            
  2. Tile -- to display movie along with their title.
          -- it is also used to display the Popular Cards like Movies or Series in HomePage
  3. UI -- Reusable UI components
      * Button -- Customized button which styles the button according to the props it receives
               -- It also has an onClick event Handler
        
### Containers Used ( Components with state )
    1. HomePage -- To display the Popular Tiles -> Movies and Series
    2. MoviesPage -- Displays the Movies using the api 
        https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json
                  -- movies are filtered by release year >=2010 and sorted in ascending alphanumeric order
    3. SeriesPage -- Display the Series using the above mentioned api and also the same filter used for movies 
    4. Header -- It Display the Brand Text and the Log In and Start a Free Trial Button
              -- Here the on clicking the Both the buttons the text inside them toggles.
              -- The Toolbar below the main Header displays text dynamically according to the Current Route 
                 [ Movies, Series, Home Page]
                 
    Routing is used to achieve the Multiple page flow.

### Higher Order Components Used
    1. Layout -- Specifies the overall Layout that the page maintains. 
    2. WithErrorHandler -- It catches if any error occurs during fetching data from the api and
              display and error message accordingly.
              
    
### Redux is used to dynamically update the Toolbar below the main Header according to Page the user is viewing.    
    
    
    
### npm install
### npm start
               
