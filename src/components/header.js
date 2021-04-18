const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerParent = document.createElement('div');
  const dateS = document.createElement('span');
  const header1 = document.createElement('h1');
  const tempS = document.createElement('span');
  
  headerParent.classList.add("header");
  dateS.classList.add("date");
  tempS.classList.add("temp");

  headerParent.appendChild(dateS);
  headerParent.appendChild(header1);
  headerParent.appendChild(tempS);

  dateS.textContent = date;
  header1.textContent = title;
  tempS.textContent = temp;

  return headerParent

}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerComponent = document.querySelector(selector);
  headerComponent.appendChild(Header('Lambda Times', 'April 18, 2021', '29*'));

}

export { Header, headerAppender }
