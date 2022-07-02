
# Random Select Package (easyselector)
Javascript easy to use random selectors
**Quick Example:** `easySelector.array.random(["first","second","third"]) => Output => "first"`

### Features

 - Select element/elements from an Array
 - Generate random number with digit number
 - Select  random color
 - Select random number/numbers

## Installation
```
npm install easyselector
```
## Usage
```js

// Get Element from an Array in Javascript
const { easySelector } = require('easyselector');
const dummyArray = ["Josef","Quaresma","Atiba","Emre","Rachid"]
const randomArrayValue = easySelector.array.random(dummyArray)
// => Output Random = "Emre"  

// Get Multiple Random Elements from an Array in JavaScript
const randomArrayMultipleValue = easySelector.array.randomMultiple(dummyArray,{ unique: true, select: 3})
// => Output Random = ["Quaresma","Rachid","Josef"] 
```
## All Functions for Array Random Selector
| Functions      | Args                                        | Usage                                                                                         | Output                    |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------- |
| random         | ```array```                                 | ```easySelector.array.random(["value1","value2"]) ```                                         | ```"value2"```            |
| randomMultiple | ```array,{unique: boolean,select:number}``` | ```easySelector.array.randomMultiple(["value1","value2","value3"],{unique:true,select:2}) ``` | ```["value1","value3"]``` |

## All Functions for Color Random Selector
| Functions | Args       | Usage                            | Output                      |
| --------- | ---------- | -------------------------------- | --------------------------- |
| hex       | ```null``` | ```easySelector.color.hex() ```  | ```"#88bc35"```             |
| rgb       | ```null``` | ```easySelector.color.rgb() ```  | ```"rgb(18,100,13)"```      |
| rgba      | ```null``` | ```easySelector.color.rgba() ``` | ```"rgba(88,58,238,0.1)"``` |

## All Functions for Number Random Selector
| Functions      | Args                                                          | Usage                                                                                 | Output                                      |
| -------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| random         | ```min:number,max:number```                                   | ```easySelector.number.random(25000,36800) ```                                        | ```35516```                                 |
| randomMultiple | ```min:number,max:number,{unique: boolean, select: number}``` | ```easySelector.number.randomMultiple(25000,36800,{ select:  5, unique:  true  }) ``` | ```[ 29634, 33173, 29273, 31333, 35071 ]``` |
| randomGenerate | ```digitNumber:number```                                      | ```easySelector.number.randomGenerate(8) ```                                          | ```95898101```                              |


## Use Cases
Coming Soon..