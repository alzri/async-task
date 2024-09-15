/* Write a function that simulates fetching user data (a username) after 2 seconds and then logs the fetched username to the console. */

// callback solution

function fetchUsernameCallback(callback: (username: string) => void) {
  setTimeout(() => {
    const username = "john_doe";
    callback(username);
  }, 2000);
}

function displayUsernameCallback() {
  fetchUsernameCallback((username) => {
    console.log("Username fetched using callback:", username);
  });
}
  
displayUsernameCallback();


// promises solution 

function fetchUsernamePromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const username = "john_doe";
      resolve(username);
    }, 2000); 
  });
}

function displayUsernamePromise() {
  fetchUsernamePromise().then((username) => {
    console.log("Username fetched using Promise:", username);
  });
}

displayUsernamePromise();


// async-await solution

async function fetchUsernameAsync(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const username = "john_doe";
      resolve(username);
    }, 2000);
  });
}

async function displayUsernameAsync() {
  const username = await fetchUsernameAsync();
  console.log("Username fetched using async-await:", username);
}

displayUsernameAsync();
