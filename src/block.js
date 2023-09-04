import { registerBlockType } from "@wordpress/blocks";
import { TextControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

registerBlockType("gst-calculator/gst-block", {
  title: "GST Calculator",
  icon: "money",
  category: "common",
  attributes: {
    amount: {
      type: "string",
      default: "0",
    },
    gstRate: {
      type: "number",
      default: 18,
    },
    totalAmount: {
      type: "string",
      default: "0",
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
    const [totalAmount, setTotalAmount] = useState(
      attributes.totalAmount
    );

    const calculateGST = () => {
      const amount = parseFloat(attributes.amount);
      const gstRate = parseFloat(attributes.gstRate);
      const calculatedGST = (amount * gstRate) / 100;
      const calculatedTotal = amount + calculatedGST;

      setTotalAmount(calculatedTotal.toFixed(2));
      setAttributes({ totalAmount: calculatedTotal.toFixed(2) });
    };

    return (
      <div>
        <h2>GST Calculator</h2>
        <TextControl
          label="Amount (USD)"
          value={attributes.amount}
          onChange={(newValue) => setAttributes({ amount: newValue })}
        />
        <TextControl
          label="GST Rate (%)"
          value={attributes.gstRate}
          onChange={(newValue) =>
            setAttributes({ gstRate: newValue })
          }
        />
        <button onClick={calculateGST}>Calculate</button>
        <p>Total Amount (USD): {totalAmount}</p>
      </div>
    );
  },
  save: function () {
    // Rendered HTML on frontend
    return null;
  },
});
