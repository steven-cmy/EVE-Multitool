/*
 * Main Javascript file for eve_multitool.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
require("@fortawesome/fontawesome-free");
require("jquery");
require("bootstrap");
require("vue");

require.context(
  "../img", // context folder
  true, // include subdirectories
  /.*/, // RegExp
);

// Your own code
require("./plugins");
require("./script");
