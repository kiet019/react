import React, { useEffect } from 'react'

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0,0)
	})
  return (
	<div className="contact">
		<h1>Contact Us</h1>
		<form action="#" method="post">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" placeholder="Your name.." required/>

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" placeholder="Your email.." required/>

			<label for="subject">Subject:</label>
			<input type="text" id="subject" name="subject" placeholder="Subject.." required/>

			<label for="message">Message:</label>
			<textarea id="message" name="message" placeholder="Write something.." required></textarea>

			<input type="submit" value="Submit"/>
		</form>
	</div>
  )
}
