/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { useState } from "@wordpress/element";

export default function Edit() {
	// Define state variables for input values and total amount
	const [amount, setAmount] = useState(0);
	const [gstRate, setGstRate] = useState(18);
	const [totalAmount, setTotalAmount] = useState(0);

	// Function to calculate GST and update the total amount
	const calculateGST = () => {
		const parsedAmount = parseFloat(amount);
		const parsedGstRate = parseFloat(gstRate);

		if (!isNaN(parsedAmount) && !isNaN(parsedGstRate)) {
			const calculatedGST = (parsedAmount * parsedGstRate) / 100;
			const calculatedTotal = parsedAmount + calculatedGST;

			setTotalAmount(calculatedTotal.toFixed(2));
		} else {
			setTotalAmount(0);
		}
	};

	return (
		<div {...useBlockProps()}>
			<h2>GST Calculator</h2>
			<label>Amount (USD):</label>
			<input
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<br />
			<label>GST Rate (%):</label>
			<input
				type="number"
				value={gstRate}
				onChange={(e) => setGstRate(e.target.value)}
			/>
			<br />
			<button onClick={calculateGST}>Calculate</button>
			<p>Total Amount (USD): {totalAmount}</p>
		</div>
	);
}
