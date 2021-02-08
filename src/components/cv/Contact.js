import React from 'react';

const Contact = () => {
  return (
    <div className="ContactList">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/nathanrodet" target="_blank">
          <i class="fab fa-linkedin"></i>
          <span>linkedin.com/in/nathanrodet</span>
          </a>
        </li>
        <li>
          <a href="https://mailto:rodetnathan.contact@gmail.com">
          <i class="fas fa-at"></i>
          <span>rodetnathan.contact@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/NathanRodet">
          <i class="fab fa-github"></i>
          <span>github.com/NathanRodet</span>
          </a>
        </li>
        <li>
          <a href="">
          <i class="fab fa-discord"></i>
          <span>Weac#3945</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;