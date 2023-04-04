
 function getTimeOfDay() {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return "Good morning.";
  } else if (hour < 16) {
    return "Good afternoon.";
  } else if (hour < 20) {
    return "Good evening.";
  } else {
    return "Goodnight.";
  }
}
 const greetingText = document.getElementById("greeting-text");
greetingText.textContent = getTimeOfDay(); 

function getCurrentBreakpoint() {
  const width = window.innerWidth;
  
  if (width >= 567 && width < 768) {
    return "You are currently on a mobile device.";
  } else if (width >= 768 && width < 1024) {
    return "You are on a tablet device.";
  } else if (width >= 1024) {
    return "Desktop devices are the best to view my website.";
  }
}
const breakpointMessage = document.getElementById("breakpoint-message");
breakpointMessage.textContent = getCurrentBreakpoint();

function updatebreakpointMessage() {
  breakpointMessage.textContent = getCurrentBreakpoint();
}

window.addEventListener("resize", updatebreakpointMessage);