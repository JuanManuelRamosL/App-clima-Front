import React from "@vitejs/plugin-react-swc";

const Card = ({whather})=> {
	return (
		<div className="wather-card">
			<div className="card-wather">
			</div>

			<p className="wather-city">
				{whather ? (whather.name + "" + whather.sys.country) : "-"}
			</p>
			<p className="wather-description"></p>
		</div>
	)
}

export default Card