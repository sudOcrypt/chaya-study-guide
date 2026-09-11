export const lectureLessons = [
  {
    id: 'position',
    source: '08/26 lecture',
    icon: '📍',
    title: 'Position, displacement & time',
    bigIdea: 'Motion only makes sense after you choose an origin and a positive direction.',
    explanation: [
      'A position tells you where an object is relative to the origin. The coordinate can be positive, negative, or zero.',
      'Displacement is the change in position: final minus initial. It includes direction, so its sign matters. Distance is the total path length and is never negative.',
      'A time interval is Δt = tf − ti. For normal forward-running clocks, Δt is positive.',
    ],
    keyIdeas: [
      'Choose the origin and positive direction before doing arithmetic.',
      'Use Δx = xf − xi, not “larger number minus smaller number.”',
      'Distance and |displacement| are equal only when there is no reversal or detour.',
    ],
    example: {
      prompt: 'Emily starts 3 mi east of a water tower and ends 2 mi west. Let east be positive. What is her displacement?',
      setup: 'xi = +3 mi and xf = −2 mi',
      work: 'Δx = xf − xi = (−2 mi) − (+3 mi) = −5 mi',
      answer: 'Her displacement is 5 mi west. The negative sign means west—not that she traveled a negative distance.',
    },
    trap: 'A final position of −2 mi is not the displacement. Displacement compares the final and initial positions.',
  },
  {
    id: 'graphs',
    source: '08/26 lecture',
    icon: '📈',
    title: 'How motion graphs talk',
    bigIdea: 'Slope tells a rate of change; area under a velocity graph tells displacement.',
    explanation: [
      'On a position–time graph, slope is velocity. A steep positive slope means fast motion in +x; a negative slope means motion in −x; a flat segment means rest.',
      'On a velocity–time graph, slope is acceleration. The signed area between the graph and the time axis is displacement.',
      'An x–t curve that is concave up has positive acceleration because its slope becomes more positive. Concave down means negative acceleration.',
    ],
    keyIdeas: [
      'x–t slope → velocity',
      'v–t slope → acceleration',
      'v–t signed area → displacement',
    ],
    example: {
      prompt: 'A velocity–time graph is a horizontal line at +4 m/s from 0 to 3 s. What is the displacement?',
      setup: 'The area is a rectangle: height 4 m/s and width 3 s.',
      work: 'Δx = vΔt = (4 m/s)(3 s) = 12 m',
      answer: 'The object moves 12 m in the positive direction.',
    },
    trap: 'Area below the time axis is negative displacement. Do not add it as a positive area unless the question asks for total distance.',
  },
  {
    id: 'uniform',
    source: '08/26 lecture',
    icon: '🚲',
    title: 'Uniform motion & averages',
    bigIdea: 'Constant velocity produces equal displacements in equal time intervals.',
    explanation: [
      'Uniform motion means velocity is constant and acceleration is zero. Its position–time graph is a straight line.',
      'Average speed uses total distance. Average velocity uses displacement. They can have different values even over the same trip.',
      'For two objects moving toward each other, their separation closes at the sum of their speeds.',
    ],
    keyIdeas: [
      'x = x₀ + vΔt when velocity is constant',
      'average speed = total distance / Δt',
      'average velocity = displacement / Δt',
    ],
    example: {
      prompt: 'Arthur and Betty are 100 m apart and walk toward each other at 3.0 m/s and 2.0 m/s. When do they meet?',
      setup: 'Their closing speed is 3.0 + 2.0 = 5.0 m/s.',
      work: 't = separation / closing speed = 100 m / 5.0 m/s = 20 s',
      answer: 'They meet after 20 seconds.',
    },
    trap: 'Do not subtract the speeds when the walkers move toward each other. Their distance closes from both sides.',
  },
  {
    id: 'acceleration',
    source: '08/26 + 08/31A',
    icon: '🏎️',
    title: 'Acceleration & constant-acceleration motion',
    bigIdea: 'Acceleration measures how quickly velocity changes—not simply how fast something moves.',
    explanation: [
      'Average acceleration is aavg = (vf − vi)/Δt. A direction reversal can create a very large velocity change.',
      'The four constant-acceleration equations connect displacement, time, initial velocity, final velocity, and acceleration. Pick the equation that contains your known values and only one unknown.',
      'When acceleration is constant, average velocity is (vi + vf)/2. This often makes stopping-distance questions much shorter.',
    ],
    keyIdeas: [
      'v = v₀ + at',
      'Δx = v₀t + ½at²',
      'v² = v₀² + 2aΔx',
      'Δx = ½(v₀ + v)t',
    ],
    example: {
      prompt: 'A car brakes uniformly from 15 m/s to rest in 1.5 s. How far does it travel?',
      setup: 'For constant acceleration, vavg = (15 + 0)/2 = 7.5 m/s.',
      work: 'Δx = vavg t = (7.5 m/s)(1.5 s) = 11.25 m',
      answer: 'The car travels about 11 m while braking (two significant figures).',
    },
    trap: 'Using 15 m/s for the whole 1.5 s would give 22.5 m, but the car is slowing throughout that interval.',
  },
  {
    id: 'free-fall',
    source: '08/31A lecture',
    icon: '🍎',
    title: 'Free fall',
    bigIdea: 'Once released, an object keeps its current velocity and gains a downward acceleration of 9.80 m/s².',
    explanation: [
      'Free fall means gravity is the only force affecting the motion. With upward chosen as positive, ay = −g = −9.80 m/s².',
      'A dropped object has v₀ = 0. A thrown object does not: it carries its launch velocity into free fall.',
      'At the top of an upward throw, velocity is momentarily zero but acceleration is still −g. Gravity never “turns off.”',
    ],
    keyIdeas: [
      'Upward-positive convention: a = −9.80 m/s²',
      'Dropped means v₀ = 0; released from a moving object may not',
      'At equal heights, ideal upward and downward speeds have equal magnitudes',
    ],
    example: {
      prompt: 'A monkey drops 1.8 m from a branch. How long does the fall take, and how fast is it moving before impact?',
      setup: 'Take up as positive: Δy = −1.8 m, v₀ = 0, and a = −9.80 m/s².',
      work: '−1.8 = ½(−9.80)t² → t = 0.606 s. Then v = 0 + (−9.80)(0.606) = −5.94 m/s.',
      answer: 'It falls for about 0.61 s and reaches 5.9 m/s downward.',
    },
    trap: 'A balloon rising at 5.0 m/s gives a released sandbag an initial upward velocity of +5.0 m/s. “Released” does not always mean v₀ = 0.',
  },
  {
    id: 'vectors',
    source: '08/31B lecture',
    icon: '🧭',
    title: 'Vectors & components',
    bigIdea: 'Components turn a direction problem into two ordinary number problems.',
    explanation: [
      'Scalars have magnitude only. Vectors have magnitude and direction. Displacement, velocity, and acceleration are vectors.',
      'For an angle measured from +x, Ax = A cos θ and Ay = A sin θ. Signs come from the vector’s quadrant.',
      'Add or subtract vectors component by component, then use the Pythagorean theorem and inverse tangent to recover magnitude and direction.',
    ],
    keyIdeas: [
      'Ax = A cos θ and Ay = A sin θ',
      'A = √(Ax² + Ay²)',
      'Rx = Ax + Bx and Ry = Ay + By',
      'Check the quadrant before stating the direction angle',
    ],
    example: {
      prompt: 'A 4.0-unit vector points into quadrant II with an angle 30° above the −x-axis. What are its components?',
      setup: 'Quadrant II means x is negative and y is positive.',
      work: 'Ax = −4.0 cos 30° = −3.46 and Ay = +4.0 sin 30° = +2.00',
      answer: 'The components are approximately (−3.5, +2.0) units.',
    },
    trap: 'A calculator can return a reference angle but cannot decide the correct quadrant for you. Use the component signs.',
  },
];

export const lectureFormulas = [
  {
    group: 'Position & averages',
    color: '#38bdf8',
    formulas: [
      { equation: 'Δx = xᶠ − xⁱ', use: 'Change in position', note: 'Keep the coordinate signs.' },
      { equation: 'vavg = Δx / Δt', use: 'Average velocity', note: 'Uses displacement.' },
      { equation: 'speedavg = distance / Δt', use: 'Average speed', note: 'Uses total path length.' },
      { equation: 'aavg = Δv / Δt', use: 'Average acceleration', note: 'Δv = vf − vi.' },
    ],
  },
  {
    group: 'Constant acceleration',
    color: '#f59e0b',
    formulas: [
      { equation: 'v = v₀ + at', use: 'No displacement needed', note: 'Connects velocity and time.' },
      { equation: 'Δx = v₀t + ½at²', use: 'No final velocity needed', note: 'Useful when time is known.' },
      { equation: 'v² = v₀² + 2aΔx', use: 'No time needed', note: 'Great for speed over a distance.' },
      { equation: 'Δx = ½(v₀ + v)t', use: 'Constant acceleration only', note: 'Uses average velocity.' },
    ],
  },
  {
    group: 'Vertical & projectile motion',
    color: '#a78bfa',
    formulas: [
      { equation: 'ay = −g = −9.80 m/s²', use: 'Up is the positive axis', note: 'Gravity points down.' },
      { equation: 'ax = 0', use: 'Ideal projectile motion', note: 'Horizontal velocity is constant.' },
      { equation: 'tfall = √(2h/g)', use: 'Drop from rest through height h', note: 'No air resistance.' },
      { equation: 'range = v₀x · t', use: 'Horizontal displacement', note: 'Same time as vertical motion.' },
    ],
  },
  {
    group: 'Vectors & math tools',
    color: '#34d399',
    formulas: [
      { equation: 'Ax = A cos θ', use: 'x-component', note: 'When θ starts at the x-axis.' },
      { equation: 'Ay = A sin θ', use: 'y-component', note: 'Apply the quadrant sign.' },
      { equation: 'A = √(Ax² + Ay²)', use: 'Vector magnitude', note: 'Pythagorean theorem.' },
      { equation: 'θref = tan⁻¹(|Ay/Ax|)', use: 'Reference angle', note: 'Then identify the quadrant.' },
      { equation: 't = (−b ± √(b²−4ac)) / 2a', use: 'Quadratic in time', note: 'Reject nonphysical roots.' },
    ],
  },
];

export const formulaFinder = [
  {
    id: 'motion-time',
    label: 'I know time, acceleration & initial velocity',
    answer: 'Use v = v₀ + at for final velocity, or Δx = v₀t + ½at² for displacement.',
  },
  {
    id: 'motion-no-time',
    label: 'I know distance but not time',
    answer: 'Use v² = v₀² + 2aΔx. It is the constant-acceleration equation with no time variable.',
  },
  {
    id: 'graph',
    label: 'I have a graph',
    answer: 'On x–t, take slope for velocity. On v–t, take slope for acceleration or signed area for displacement.',
  },
  {
    id: 'freefall',
    label: 'The object is dropped or thrown vertically',
    answer: 'Use the y versions of the constant-acceleration equations with ay = −9.80 m/s² when upward is positive.',
  },
  {
    id: 'vector',
    label: 'I have magnitude and direction',
    answer: 'Break the vector into Ax = A cos θ and Ay = A sin θ, assign signs from the quadrant, then calculate with components.',
  },
];

export const lectureFlashcards = [
  { front: 'What must be chosen before describing 1-D motion?', back: 'An origin and a positive direction. Every position, displacement, velocity, and acceleration sign depends on that choice.' },
  { front: 'Displacement', back: 'Δx = xf − xi. It is a signed change in position, not total path length.' },
  { front: 'Slope of an x–t graph', back: 'Velocity. Positive slope means +x motion; negative slope means −x motion; zero slope means rest.' },
  { front: 'Slope and area of a v–t graph', back: 'Slope is acceleration. Signed area is displacement.' },
  { front: 'Uniform motion', back: 'Constant velocity and zero acceleration. The x–t graph is a straight line.' },
  { front: 'Average speed vs. average velocity', back: 'Average speed uses total distance. Average velocity uses displacement.' },
  { front: 'Average acceleration', back: 'aavg = (vf − vi)/Δt. Velocity signs are essential when direction changes.' },
  { front: 'Equation with no time', back: 'v² = v₀² + 2aΔx' },
  { front: 'Equation with no final velocity', back: 'Δx = v₀t + ½at²' },
  { front: 'Average velocity during constant acceleration', back: 'vavg = (v₀ + v)/2, so Δx = ½(v₀ + v)t.' },
  { front: 'Free-fall acceleration with up positive', back: 'ay = −g = −9.80 m/s², during the entire flight—even at the top.' },
  { front: 'Velocity at the top of an upward throw', back: 'v = 0 momentarily, but acceleration remains −9.80 m/s².' },
  { front: 'Initial velocity of an object released by a moving balloon', back: 'It initially has the balloon’s velocity. Release does not erase its motion.' },
  { front: 'Scalar vs. vector', back: 'A scalar has magnitude only. A vector has magnitude and direction.' },
  { front: 'Vector components from magnitude and angle', back: 'For θ measured from +x: Ax = A cos θ and Ay = A sin θ, with signs determined by the quadrant.' },
  { front: 'Resultant vector from components', back: 'Add x-components together and y-components together. Then R = √(Rx² + Ry²).' },
  { front: 'Components with Ax < 0 and Ay > 0', back: 'The vector is in quadrant II, between 90° and 180° from +x.' },
  { front: 'What does concave up mean on an x–t graph?', back: 'The slope is becoming more positive, so acceleration is positive.' },
];

export const lectureQuiz = [
  {
    question: 'A student moves from x = +4 m to x = −3 m. What is the displacement?',
    options: ['A. +7 m', 'B. −7 m', 'C. +1 m', 'D. −1 m'],
    answer: 'B',
    explanation: 'Δx = xf − xi = −3 − 4 = −7 m.',
  },
  {
    question: 'What does the slope of a position-versus-time graph represent?',
    options: ['A. Distance', 'B. Acceleration', 'C. Velocity', 'D. Displacement'],
    answer: 'C',
    explanation: 'Slope is Δx/Δt, which is velocity.',
  },
  {
    question: 'A v–t graph stays at −3 m/s for 4 s. What is the displacement?',
    options: ['A. −12 m', 'B. −0.75 m', 'C. +12 m', 'D. +7 m'],
    answer: 'A',
    explanation: 'Displacement is signed area under v–t: (−3 m/s)(4 s) = −12 m.',
  },
  {
    question: 'Two walkers 150 m apart move toward each other at 4 m/s and 2 m/s. When do they meet?',
    options: ['A. 75 s', 'B. 37.5 s', 'C. 25 s', 'D. 15 s'],
    answer: 'C',
    explanation: 'Closing speed is 4 + 2 = 6 m/s, so t = 150/6 = 25 s.',
  },
  {
    question: 'A car slows uniformly from 20 m/s to 0 in 4 s. How far does it travel?',
    options: ['A. 80 m', 'B. 40 m', 'C. 20 m', 'D. 10 m'],
    answer: 'B',
    explanation: 'For constant acceleration, vavg = (20 + 0)/2 = 10 m/s. Distance = 10 × 4 = 40 m.',
  },
  {
    question: 'Which constant-acceleration equation is usually best when time is not given or requested?',
    options: ['A. v = v₀ + at', 'B. Δx = v₀t + ½at²', 'C. v² = v₀² + 2aΔx', 'D. vavg = Δx/t'],
    answer: 'C',
    explanation: 'v² = v₀² + 2aΔx is the constant-acceleration equation that contains no time.',
  },
  {
    question: 'A ball is moving upward. With upward positive and no air resistance, what are the signs of velocity and acceleration before it reaches the top?',
    options: ['A. v positive, a positive', 'B. v positive, a negative', 'C. v negative, a positive', 'D. v negative, a negative'],
    answer: 'B',
    explanation: 'The ball moves upward, so v > 0, while gravity points downward, so a = −g.',
  },
  {
    question: 'At the very top of a ball’s ideal vertical flight, which statement is correct?',
    options: ['A. v = 0 and a = 0', 'B. v = −g and a = 0', 'C. v = 0 and a = −g', 'D. v = +g and a = −g'],
    answer: 'C',
    explanation: 'Velocity is momentarily zero, but gravity continues to provide downward acceleration.',
  },
  {
    question: 'A sandbag is released from a balloon rising at +5 m/s. What is the sandbag’s velocity immediately after release?',
    options: ['A. 0 m/s', 'B. +5 m/s', 'C. −5 m/s', 'D. −9.8 m/s'],
    answer: 'B',
    explanation: 'The sandbag retains the balloon’s upward velocity at the instant it is released.',
  },
  {
    question: 'A vector has Ax < 0 and Ay > 0. Which quadrant contains the vector?',
    options: ['A. Quadrant I', 'B. Quadrant II', 'C. Quadrant III', 'D. Quadrant IV'],
    answer: 'B',
    explanation: 'Negative x and positive y identify quadrant II.',
  },
  {
    question: 'A 10-unit vector is 30° above the +x-axis. What is its y-component?',
    options: ['A. 5.0', 'B. 8.7', 'C. 10.0', 'D. 20.0'],
    answer: 'A',
    explanation: 'Ay = A sin θ = 10 sin 30° = 5.0.',
  },
  {
    question: 'What quantity is found by adding the signed areas under a velocity-versus-time graph?',
    options: ['A. Acceleration', 'B. Average speed', 'C. Displacement', 'D. Final velocity'],
    answer: 'C',
    explanation: 'Each area vΔt is a displacement; adding the signed areas gives net displacement.',
  },
];
