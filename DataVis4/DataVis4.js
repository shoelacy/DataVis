var distance = [2.5,13.5,3.3,13.8,18.1,11.1,6.3,5.9,11,49.3,9.7,9.2,26.2,26.8,20,16.1,15.6,13.1,13.8,25,10.8,10.7,15.4,5.2,4.5,5.9,11.8,11.7,16.5,17,1.8,11.4,22.1,37.1,29.6,31,18.1,19.6,7.8,9.2,1.6,42.2,45.7,40.2,43.2,41.1,26.7,20,22.1,1.9,31.1,1.5,8.5,7.7,12.4,1.6,3.5,4.4,6.4,17.3,39.2,37.8,40.4,49.3,16.8,34,9.4,24.4,13,27.4,7.9,17.1,12.8,4.2,7.5,30,45.3,18.9,12.4,16.9,42.3,19.3,29.9,8.7,18.7,19.4,37,36.9,38.8,20.6,19.6,32.7,30,36.1,12.1,35.5,8.4,25,18,2.6,9.9,8.5,43.7,46.8,24.3,23.4,20,23.5,6.4,9.7,33.7,12.6,13.3,22.1,21.3,13.8,19.5,16.1,19.8,19.3,44.5,23,14.9,35.7,31.2,7];
var pdensity = [4339.1,2115.4,3516.6,749,1847,898.4,4475.2,3995.1,2925.9,101.5,3016.4,2408.6,1517.1,1212.9,2322.9,2518.5,3115,2832,2914.1,2.2,2456.2,3008.5,1505.7,5102.6,4981.9,4589.1,1754,2407.3,2515.7,2330.1,9783.1,4856.7,2704.5,1034.8,1703,440.2,2223.1,1622,3990.4,1542.6,6657.3,1664.9,441.2,1862.4,109.5,967.1,2470.9,2508.1,1438,2955.1,2185.8,1865.7,4127.9,6456.4,2807.3,8265.8,5189.9,6322.1,3299.1,2666,1975.1,1477.9,1275.6,59.6,2094.9,1366.5,2256.4,283.8,3908.6,239.5,2388.8,1805.4,2485.6,5124.4,1642.3,1093.6,12.3,3235.1,1271.6,1921.7,628.3,350,372.6,2283.9,3403.2,5.2,152.8,202.6,704,2971.5,2505.8,667.7,1774.2,567.9,3809.9,223.7,2062.8,2091.4,2348.3,1820.8,3352.1,3419.6,99.5,48,2212.4,2071.7,3236.6,2809.5,7209,2371,102,2103,1464.4,3145.9,3057.9,2402.4,741.8,1752.3,2313.3,1970.6,29.9,1696.9,2480.7,28.2,181.6,2726.5];
var bdensity = [900,224.8648649,979.787234,61.3559322,82.19047619,70.98765432,786.8181818,303.9473684,248.6206897,7.096281202,450.5357143,311.3636364,235.5,132.6262626,262.3333333,288.9534884,219.7222222,355.8571429,215.483871,148.9010989,159.3333333,330.7142857,88.63636364,524.9019608,399.5454545,237.1875,185.6716418,212.8,199.3023256,125.9090909,1312.777778,365.7894737,101.1304348,87.78325123,104.0625,35.9009009,257.8723404,161.7721519,306.2318841,204.6938776,1480,89.23076923,17.50582751,75.49019608,10.84455324,39.45736434,115.4736842,98.85714286,104.0277778,613,84.03846154,496.2068966,517.2413793,598.0769231,179.0196078,1462.857143,520.4,426.875,342.4,198.5365854,162.3275862,50.53030303,100.9589041,5.696682464,152.1782178,198.2716049,192.8358209,18.28571429,281.5,23.64864865,259.4117647,104.025974,155.8715596,463.3333333,245.25,89.87804878,1.136150235,95.90909091,71.88888889,100.7438017,43.5106383,55.04504505,34.10810811,173.6363636,159.3478261,0.789473684,8.867635807,7.018018018,27.10743802,275.9090909,217.1212121,51.9047619,108.72,44.70588235,302.8,32.35465116,140.4545455,124.2105263,237.8431373,144.75,207.4285714,221,6.258692629,4.081632653,137.4468085,172.3404255,163.125,119.1304348,581.25,205.6097561,5.969111969,189.787234,109.625,172.3076923,169.5,207.2881356,46.62962963,185.1282051,188.4782609,152.7419355,1.914516447,116.0240964,142.8947368,2.486577181,5.936037441,212.5];
var x;
var y;
var y_;
var frame = 40;
var forward = true;
function setup() {
  createCanvas(600,400);
  ellipseMode(RADIUS);
}

function draw() {
  background(255);
  stroke(1);
  line(50, 0, 50, 400);
  line(0, 350, 600, 350);
  fill(255, 77, 0);
  noStroke();
  for (var i = 0; i < 126; i++) {
    x = 10*distance[i]+50;
    y = height-75*log(pdensity[i])/log(10)-50;
    y_ = height-75*log(bdensity[i])/log(10)-50;
    var dy = (y_-y)/40;
    ellipse(x, y+dy*frame, 4, 4);
  }
  if (forward && frame < 40) {
    frame++;
  }
  if (!forward && frame > 0) {
    frame--;
  }
}

function keyPressed() {
  forward = !forward;
}