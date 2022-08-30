import React from 'react'

function PizzaTypes(props) {
  return (
    <div>
        <div className="container piza types">
	<div className="row">
		<h3 className="text-center">Pizza {props.title}</h3>

		<div className="col-md-3">
			<div className="thumbnail">
      <img src="images/pic10-unsplash.jpg" alt="pepperoni" />
      <div className="caption">
        <h3>Pepperoni Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing
        	elit, sed do eiusmod tempor incididunt ut labore et
        	dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut
        	aliquip ex ea commodo consequat. 
        </p>
        
      </div>
    </div>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
      <img src="images/vege-unsplash.jpg" alt="veg pizza" />
      <div className="caption">
        <h3>Vegetable Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing
        	elit, sed do eiusmod tempor incididunt ut labore et
        	dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut
        	aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
      <img src="images/cheese-unsplash.jpg" alt="cheese pizza" />
      <div className="caption">
        <h3>Cheese Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing
        	elit, sed do eiusmod tempor incididunt ut labore et
        	dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut
        	aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
		</div>
		<div className="col-md-3">
			<div className="thumbnail">
      <img src="images/pic11-unsplash.jpg" alt="" />
      <div className="caption">
        <h3>Bossu Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing
        	elit, sed do eiusmod tempor incididunt ut labore et
        	dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut
        	aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
		</div>
	</div>
</div>
    </div>
  )
}

export default PizzaTypes