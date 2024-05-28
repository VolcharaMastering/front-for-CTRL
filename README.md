# Frontend for Test Task for CTRL+

**Functionality:**  
- User registration and authorization  
- Management of places on the map (add, delete, search by keyword, retrieve all places)  
- Management of reviews for places (add, retrieve, update, delete, search by keyword, sort by rating or date with order selection)  

### Details of Functionality:  

**User Registration and Authorization:**  
Registration and authorization are handled using Axios. The token received from the backend is stored in a cookie. User information and state are managed using the MobX store.

**Management of Places:**  
The map is created using OpenStreetMap, Leaflet, and React-Leaflet. Users can add a place to their database (click on the place, enter the name, and add it), delete a place (using the left menu bar), search by keyword (using the left menu bar), and retrieve all places by default.

**Management of Reviews:**  
Users can manage reviews using the left menu bar under the "Place details" tab. Available functionalities include adding a review for a place, retrieving reviews for a place, updating, deleting, searching by keyword, and sorting by rating or date with order selection.

**Technologies Used:**  
- **React.js**: JavaScript framework  
- **SCSS**: Preprocessor scripting language compiled into CSS  
- **MobX**: Simple but powerful state manager for React  
- **Axios**: Promise-based HTTP client for the browser and Node.js  
- **Js-Cookie**: JavaScript library for storing and retrieving data as cookies in the client’s browser  
- **Leaflet, React-Leaflet**: JavaScript and React libraries for interactive maps  
- **OpenStreetMap**: Interactive map API  
- **@smastrom/react-rating**: Simple library for working with ratings  
- **Yup**: Schema builder for runtime value parsing and validation  
- **@fontsource/**: Library for easy integration of Google Fonts in apps  
- **PNPM**: Fast npm manager  
- **Vite**: Modern frontend build tool for creating React/Vue/JavaScript applications  
<!-- - JsDoc: To generate documentation for code  -->  
- **Prettier and ESLint**

**To Explore:**  
1. Clone the Git repo to your computer and navigate into the cloned directory.  
2. Enter `pnpm install` in your terminal.  
3. Run the project in development mode using `npm run dev`.  
4. Use any browser and enter `http://localhost:5173/` in the address bar.  
<!-- - To explore code documentation, open the "./out/" folder and start the index.js file.  -->
