import { useState } from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form(props) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to datasearch prop, which is from both the issue comp and characters comp get function
    props.datasearch(formData.searchTerm);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.searchTerm}
          name="searchTerm"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
