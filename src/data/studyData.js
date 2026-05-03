export const topics = [
  {
    id: "bioenergetics",
    title: "Bioenergetics",
    color: "#3B82F6",
    icon: "⚡",
    summary: [
      { heading: "ATP — The Molecular Currency", content: "ATP (Adenosine Triphosphate) is the only form of energy cells can directly use. The body stores only ~1–3 seconds of ATP; it must be continuously regenerated. Macronutrients (CHO, FAT, PRO) are metabolized to produce ATP." },
      { heading: "Fuel Sources & Storage", content: "Carbohydrate: 4 kcal/g — stored as muscle glycogen (~400 g, ~1,600 kcal) and liver glycogen (~100 g, ~400 kcal). Fat: 9 kcal/g — stored as IMTG (~200 g, ~1,800 kcal) and adipose tissue (>75,000 kcal). Protein: 4 kcal/g — not a primary fuel source (<5% of ATP synthesis under normal conditions)." },
      { heading: "Three Energy Systems", content: "1. Phosphagen System (ATP-PCr): Cytosol, anaerobic, 3–15 sec, very high power. 2. Glycolytic System: Cytosol, anaerobic, 10 step process, produces 2–3 ATP + lactate. 3. Oxidative System: Mitochondria, aerobic, TCA cycle + ETC, produces ~32 ATP per glucose." },
      { heading: "Glycolysis", content: "10-step conversion of glucose → pyruvate. Net yield: 2 ATP from glucose, 3 ATP from glycogen. Rate-limiting enzyme: PFK (phosphofructokinase). Byproducts: Lactate + H⁺. If O₂ present, pyruvate → Acetyl-CoA → enters TCA." },
      { heading: "Oxidative Phosphorylation", content: "TCA cycle generates NADH and FADH₂. ETC: NADH = 2.5 ATP; FADH₂ = 1.5 ATP. Total from 1 glucose: ~32–33 ATP. Fat yields ~3–4× more ATP than glucose (e.g., palmitate ≈ 129 ATP). Beta-oxidation cleaves 2-carbon units as Acetyl-CoA." },
      { heading: "Respiratory Exchange Ratio (RER)", content: "RER = VCO₂ / VO₂. Pure fat oxidation → RER = 0.70. Pure CHO oxidation → RER = 1.00. RER of 0.85 → 50% fat / 50% CHO. Used to estimate fuel utilization during exercise. RER of 0.80 = 4.80 kcal/L O₂." },
      { heading: "Fuel Selection During Exercise", content: "Low intensity (<30% VO₂max): primarily FAT. High intensity (>70% VO₂max): primarily CHO. As intensity ↑, reliance on anaerobic (faster) pathways ↑. Duration ↑ → reliance on oxidative system ↑. Training shifts crossover point to higher intensities (more fat oxidation at given workload)." },
    ],
    flashcards: [
      { front: "What does ATP stand for and why is it important?", back: "Adenosine Triphosphate — the body's only directly usable form of energy ('molecular money'). Stored ATP lasts only ~1–3 seconds." },
      { front: "What are the 3 energy systems in order of speed?", back: "1. Phosphagen (ATP-PCr) — fastest, 3–15 sec\n2. Glycolytic — moderate, seconds to ~2 min\n3. Oxidative — slowest but most sustained" },
      { front: "What is the RER for pure fat oxidation?", back: "RER = 0.70 (fat requires more O₂ relative to CO₂ produced)\nFormula: VCO₂ / VO₂" },
      { front: "What is the RER for pure carbohydrate oxidation?", back: "RER = 1.00 (equal O₂ consumed and CO₂ produced)\n6CO₂ + C₆H₁₂O₆ → 6CO₂ + 6H₂O + 32 ATP" },
      { front: "How many ATP are produced from complete oxidation of 1 glucose molecule?", back: "~32–33 ATP total:\n• Glycolysis: 2–3 ATP\n• TCA cycle: 2 ATP\n• ETC (from NADH/FADH₂): ~28 ATP" },
      { front: "What is the rate-limiting enzyme of glycolysis?", back: "PFK (Phosphofructokinase)\nInhibited by ATP and lactic acid; stimulated by AMP/ADP" },
      { front: "What is the Phosphagen System used for?", back: "Very short, maximal intensity activities (3–15 sec)\nExamples: 50m dash, single football play\nFuel: Phosphocreatine (PCr) + ADP → ATP + Cr\nAnaerobic; takes place in cytosol" },
      { front: "What is beta-oxidation?", back: "Process of aerobically oxidizing fatty acids inside the mitochondria. Each round cleaves 2 carbons as Acetyl-CoA. Fat yields ~3–4× more ATP than glucose per gram." },
      { front: "What is the Cori Cycle?", back: "Lactate produced in muscle is transported to the liver where it is converted back to glucose via gluconeogenesis, which can then be returned to the muscle." },
      { front: "What RER value corresponds to 50% fat / 50% CHO utilization?", back: "RER = 0.85\nTable: 0.70 = 100% fat; 0.85 = 50/50; 1.00 = 100% CHO" },
      { front: "What is glycogenesis?", back: "The process of converting glucose into glycogen for storage.\nMuscle glycogen: ~400 g (only used by muscle)\nLiver glycogen: ~100 g (can be exported as blood glucose)" },
      { front: "What is lipogenesis?", back: "The conversion of excess glucose into triglycerides (fat). Occurs when glycogen stores are full and excess CHO is consumed." },
      { front: "At what exercise intensity does fat oxidation dominate?", back: "Low intensity (<30% VO₂max, e.g., walking)\nZone 2 (50–65% VO₂max) = maximal fat oxidation rate" },
      { front: "What is the PCr recovery ratio for the Phosphagen System?", back: "1:10 to 1:15 (work:rest)\nA 10-second sprint requires 100–150 seconds of recovery for full PCr resynthesis" },
      { front: "What are the byproducts of aerobic metabolism?", back: "ATP, CO₂, and water (H₂O)\n• CO₂ is expelled through the lungs\n• Water is a minor byproduct" },
      { front: "What does NADH yield vs FADH₂ in the ETC?", back: "NADH = 2.5 ATP\nFADH₂ = 1.5 ATP\nBoth donate electrons to the Electron Transport Chain in the mitochondria" },
      { front: "How does endurance training affect fuel utilization?", back: "Training increases ability to oxidize FFA (fat) at higher intensities, sparing glycogen. The crossover point shifts right, meaning athletes can work harder while burning more fat." },
      { front: "What is the kcal/L O₂ for RER = 0.80?", back: "4.80 kcal per liter of O₂ consumed\nUsed to calculate energy expenditure from gas exchange data" },
    ],
    quiz: [
      {
        question: "Complete oxidation of one glucose molecule through glycolysis, the TCA cycle, and the electron transport chain yields approximately how many ATP?",
        options: ["A. 2–3 ATP", "B. 8–10 ATP", "C. 32–33 ATP", "D. 100–150 ATP"],
        answer: "C",
        explanation: "Glycolysis yields 2–3 ATP, TCA cycle 2 ATP, and the ETC approximately 28 ATP from NADH and FADH₂ carriers, totaling ~32–33 ATP."
      },
      {
        question: "A subject has a measured RER of 0.70 during steady-state exercise. What can you conclude about their predominant fuel source?",
        options: ["A. 100% carbohydrate oxidation", "B. 50% carbohydrate, 50% fat", "C. 100% fat oxidation", "D. Primarily protein oxidation"],
        answer: "C",
        explanation: "RER = 0.70 corresponds to pure fat oxidation. The formula is VCO₂/VO₂; fat requires more O₂ per CO₂ produced due to its lower oxygen content."
      },
      {
        question: "Which enzyme is considered the rate-limiting step of glycolysis and is inhibited by ATP accumulation?",
        options: ["A. Hexokinase", "B. Pyruvate kinase", "C. Phosphofructokinase (PFK)", "D. Lactate dehydrogenase (LDH)"],
        answer: "C",
        explanation: "PFK is the primary regulatory enzyme of glycolysis. High ATP concentrations inhibit PFK (negative feedback), slowing glycolysis when energy supply is sufficient."
      },
      {
        question: "An athlete performs a single 100m sprint (~10 seconds). Which energy system is the PRIMARY source of ATP during this effort?",
        options: ["A. Oxidative phosphorylation", "B. Phosphagen (ATP-PCr) system", "C. Glycolytic system", "D. Beta-oxidation"],
        answer: "B",
        explanation: "The phosphagen system supports maximal efforts lasting 3–15 seconds. PCr rapidly donates a phosphate group to ADP, regenerating ATP in the cytosol without oxygen."
      },
      {
        question: "During the electron transport chain, which carrier molecule yields MORE ATP per molecule?",
        options: ["A. FADH₂ (1.5 ATP)", "B. NADH (2.5 ATP)", "C. Acetyl-CoA (2 ATP)", "D. Pyruvate (1 ATP)"],
        answer: "B",
        explanation: "NADH yields 2.5 ATP per molecule, while FADH₂ yields 1.5 ATP. NADH enters the ETC at a higher energy level (Complex I), generating more proton gradient."
      },
      {
        question: "What is the Cori Cycle?",
        options: [
          "A. Conversion of fatty acids to ketone bodies in the liver",
          "B. Transport of lactate from working muscle to liver for conversion to glucose",
          "C. The process of glycogen synthesis from glucose",
          "D. Conversion of amino acids to glucose in the kidney"
        ],
        answer: "B",
        explanation: "The Cori Cycle shuttles lactate from exercising muscle to the liver, where it undergoes gluconeogenesis to form glucose, which is then returned to the muscle via circulation."
      },
      {
        question: "At exercise intensities above ~70% VO₂max, carbohydrate becomes the predominant fuel. What is the BEST mechanistic explanation?",
        options: [
          "A. Fat is completely unavailable at high intensities",
          "B. High-intensity exercise demands fast ATP production, and fat oxidation is too slow to meet demand",
          "C. Glycogen stores are depleted at low intensities",
          "D. The liver cannot supply enough free fatty acids during exercise"
        ],
        answer: "B",
        explanation: "Fat oxidation (beta-oxidation + TCA + ETC) is a slower process. At high intensities, the demand for rapid ATP synthesis exceeds the rate fat can supply it, necessitating faster anaerobic and glycolytic pathways."
      },
      {
        question: "A researcher measures gas exchange and finds VO₂ = 5.0 L/min and VCO₂ = 4.5 L/min during exercise. What is the RER and approximate fuel mix?",
        options: [
          "A. RER = 0.80; ~75% fat, 25% CHO",
          "B. RER = 0.90; ~25% fat, 75% CHO",
          "C. RER = 1.10; hyperventilation only",
          "D. RER = 0.70; 100% fat"
        ],
        answer: "B",
        explanation: "RER = VCO₂/VO₂ = 4.5/5.0 = 0.90. At RER 0.90, approximately 25% of energy comes from fat and 75% from carbohydrate, reflecting high-intensity submaximal exercise."
      },
      {
        question: "Endurance training shifts the metabolic crossover point. What does this mean physiologically?",
        options: [
          "A. Trained athletes use more CHO at all exercise intensities",
          "B. Trained athletes oxidize more fat at a given absolute workload, sparing glycogen",
          "C. Training eliminates the need for the glycolytic system",
          "D. Training increases PCr stores proportionally to fat stores"
        ],
        answer: "B",
        explanation: "Endurance training increases mitochondrial density, enzyme activity, and fat oxidation capacity, allowing athletes to rely more on fat at higher workloads, thereby sparing limited glycogen stores."
      },
      {
        question: "Beta-oxidation of fatty acids occurs in which cellular location?",
        options: ["A. Cytosol", "B. Cell nucleus", "C. Mitochondria", "D. Endoplasmic reticulum"],
        answer: "C",
        explanation: "Beta-oxidation occurs in the mitochondrial matrix. Fatty acids must be transported into the mitochondria via carnitine transport before undergoing sequential 2-carbon cleavage as Acetyl-CoA."
      },
    ]
  },
  {
    id: "body-composition",
    title: "Body Composition",
    color: "#10B981",
    icon: "🏃",
    summary: [
      { heading: "What Is Body Composition?", content: "Classification of what the body is made of. Primary index: Body Fat Percentage (%BF). Fat Mass (FM) = total fat. Fat-Free Mass (FFM) = everything else (muscle, bone, water, organs). Total Body Mass = FM + FFM." },
      { heading: "Why Evaluate Body Composition?", content: "1. Health: Excessive fat ↑ risk of CVD, hypertension, T2DM, cancer. Extremely low fat ↑ risk of reproductive, circulatory, bone, and immune disorders. 2. Performance: Body comp does NOT directly determine performance but informs training and nutrition strategies." },
      { heading: "Assessment Methods", content: "BMI: Height/weight ratio; good for populations; cannot distinguish FM vs FFM. Waist-to-Hip Ratio: evaluates fat distribution. Skinfold: assumes subcutaneous fat correlates with total fat; 3, 4, or 7-site. Hydrostatic Weighing: Archimedes' principle; fat more buoyant than lean tissue. BodPod: air displacement plethysmography. BIA: electrical current; fat less conductive than lean tissue. DEXA: gold standard; measures bone, fat, lean tissue; can assess visceral fat." },
      { heading: "Body Fat Norms", content: "Essential fat: Men ~3–5%, Women ~10–13%. Average: Men 10–22%, Women 20–32%. Obese: Men >25%, Women >32%. Athletes vary by sport: bodybuilding (5–8% M / 10–15% F), distance running (5–10% M / 10–20% F)." },
      { heading: "Improving Body Composition", content: "Lean mass gain: requires caloric balance or surplus + resistance training. Fat mass loss: requires caloric deficit. Optimal rates: ~0.5 lb/week lean mass gain; ~0.5% BM/week fat loss. Zone 2 Cardio (50–65% VO₂max) maximizes fat oxidation rate." },
      { heading: "Zone 2 Cardio Summary", content: "50–65% VO₂max = maximal fat oxidation (MFO). Great for metabolic efficiency, mitochondrial function, capillary density. For body composition: useful with caloric deficit + adequate protein. Not optimal for VO₂max improvement (heavy/severe/extreme intensity needed)." },
    ],
    flashcards: [
      { front: "What is the primary index used to evaluate body composition?", back: "Body Fat Percentage (%BF)\nFat Mass (FM) + Fat-Free Mass (FFM) = Total Body Mass" },
      { front: "Which body composition assessment uses Archimedes' principle?", back: "Hydrostatic (Underwater) Weighing\nFat is more buoyant than lean tissue, so leaner individuals sink more and weigh more underwater" },
      { front: "What are the essential fat percentages for males and females?", back: "Males: ~3–5% essential fat\nFemales: ~10–13% essential fat\n(Females need more for hormonal and reproductive function)" },
      { front: "What does DEXA measure and what is its main advantage?", back: "Dual-Energy X-ray Absorptiometry\nMeasures: Bone mineral, fat mass, lean tissue\nAdvantage: Can assess visceral fat; gold standard for body composition" },
      { front: "What is the main limitation of BMI for athletes?", back: "BMI cannot distinguish between fat mass and fat-free mass (muscle, bone). A muscular athlete may have a high BMI but very low body fat %, making BMI unreliable in athletic populations." },
      { front: "What is BIA and what principle does it rely on?", back: "Bioelectrical Impedance Analysis\nPrinciple: Fat is less electrically conductive than lean tissue\nSends electrical current through body to estimate body fat %\nLess reliable in obese populations" },
      { front: "What is body recomposition?", back: "Simultaneously losing fat mass AND gaining lean mass\nEasier to achieve when: large amount of fat to lose, resistance training naive, adequate protein intake\nRequires precise caloric management" },
      { front: "What %VO₂max range maximizes fat oxidation rate (MFO)?", back: "50–65% VO₂max (Zone 2 Cardio)\nThis is the 'sweet spot' for maximal fat oxidation as measured by indirect calorimetry" },
      { front: "What are the two purposes of evaluating body composition?", back: "1. Health: Identify risk for chronic disease (CVD, T2DM, hypertension, cancer)\n2. Performance: Inform training/nutrition strategies for sport-specific body composition goals" },
      { front: "What is the BodPod and how does it work?", back: "Air Displacement Plethysmography\nUses computerized air pressure sensors to measure volume of air displaced\nCalculates body density → %BF (similar principle to hydrostatic weighing)" },
      { front: "Waist-to-Hip ratio assesses what?", back: "Body fat distribution\nWaist: measured at narrowest point below ribs\nHips: measured at widest point (gluteus maximus)\nIndicates abdominal (central/visceral) fat risk" },
      { front: "What are the health risks of excessive body fat?", back: "• Cardiovascular disease (~703,000 deaths/year)\n• Hypertension\n• Type 2 diabetes (~103,000 deaths/year)\n• Cancer (~609,000 deaths/year)" },
      { front: "What is the skinfold method and what does it assume?", back: "Uses calipers to measure subcutaneous fat at multiple sites (3, 4, or 7 sites)\nAssumption: subcutaneous fat correlates well with total body fat\nHighly correlated with DEXA and hydrostatic weighing" },
    ],
    quiz: [
      {
        question: "Which body composition assessment method is based on Archimedes' principle that fat tissue is less dense (more buoyant) than lean tissue?",
        options: ["A. DEXA", "B. Bioelectrical Impedance Analysis (BIA)", "C. Hydrostatic Weighing", "D. Air Displacement Plethysmography"],
        answer: "C",
        explanation: "Hydrostatic (underwater) weighing uses Archimedes' principle. Since fat is more buoyant, a leaner individual weighs more underwater relative to their body mass, allowing calculation of whole-body density and %BF."
      },
      {
        question: "A collegiate football player has a BMI of 31 (classified as 'obese') but 12% body fat. Which limitation of BMI does this best illustrate?",
        options: [
          "A. BMI underestimates fat mass in all populations",
          "B. BMI cannot distinguish between fat mass and fat-free mass",
          "C. BMI is inaccurate below age 25",
          "D. BMI does not account for height differences"
        ],
        answer: "B",
        explanation: "BMI only uses height and weight, so it cannot differentiate between heavy muscle mass and fat mass. This makes it unreliable for athletic populations where high FFM (not fat) drives the elevated BMI."
      },
      {
        question: "DEXA is considered a gold-standard body composition assessment because it uniquely provides:",
        options: [
          "A. Only total body fat percentage",
          "B. Measurements of bone mineral, fat mass, and non-bone lean tissue including visceral fat",
          "C. Measurement of intramuscular fat only",
          "D. Only waist-to-hip ratio calculations"
        ],
        answer: "B",
        explanation: "DEXA uses low-dose X-ray scans to differentiate bone mineral, fat tissue, and lean tissue. It can also assess regional fat distribution including visceral fat, making it highly informative."
      },
      {
        question: "According to the 'U-shaped curve' for body fat and health risk, which of the following is TRUE?",
        options: [
          "A. Lower body fat is always associated with better health",
          "B. Higher body fat is always associated with better health",
          "C. Both extremely low AND extremely high body fat are associated with increased health risks",
          "D. Body fat has no relationship to health outcomes"
        ],
        answer: "C",
        explanation: "The U-shaped curve shows that both extremes carry health risks. Extremely low body fat risks hormonal, bone, and immune dysfunction; extremely high body fat risks CVD, diabetes, hypertension, and cancer."
      },
      {
        question: "Zone 2 cardio (50–65% VO₂max) is MOST beneficial for which of the following?",
        options: [
          "A. Maximizing VO₂max improvements",
          "B. Maximizing sprint performance",
          "C. Maximizing fat oxidation rate and metabolic efficiency",
          "D. Building maximal strength"
        ],
        answer: "C",
        explanation: "Research shows maximal fat oxidation (MFO) occurs at ~50–65% VO₂max. Zone 2 training improves mitochondrial function, enzyme activity, and capillary density. However, it does NOT significantly improve VO₂max — higher intensities are required for that."
      },
      {
        question: "What is the primary principle behind Bioelectrical Impedance Analysis (BIA)?",
        options: [
          "A. Fat tissue conducts electricity better than lean tissue",
          "B. Lean tissue conducts electricity better than fat tissue",
          "C. Bone tissue absorbs more electrical current than fat",
          "D. Electrical resistance is proportional to body height"
        ],
        answer: "B",
        explanation: "BIA relies on the principle that lean tissue (high water content) conducts electricity more efficiently than fat tissue. The rate of electrical current flow is measured to estimate body fat percentage."
      },
      {
        question: "For a goal of simultaneous fat loss and lean mass gain ('body recomposition'), which approach is MOST effective according to the lecture?",
        options: [
          "A. Large caloric surplus with minimal protein",
          "B. Severe caloric restriction with no exercise",
          "C. Resistance training + adequate protein + modest caloric deficit",
          "D. Zone 2 cardio only"
        ],
        answer: "C",
        explanation: "Body recomposition requires: resistance training to stimulate MPS, high protein intake to support muscle building, and a caloric deficit to drive fat loss. This is most effective in those with significant fat to lose or who are resistance training novices."
      },
      {
        question: "At 30% VO₂max, approximately 55% of energy burned is from fat, but the total caloric burn is low. At 60% VO₂max, 42% of energy is from fat but total caloric burn is higher. What conclusion can be drawn?",
        options: [
          "A. Lower intensity always burns more total fat",
          "B. Higher intensity burns more total fat in absolute terms despite lower fat percentage",
          "C. Fat oxidation percentage is more important than total fat burned",
          "D. Exercise intensity has no effect on fat loss outcomes"
        ],
        answer: "B",
        explanation: "While lower intensity exercise burns a higher *percentage* of fat, higher intensity burns more *total calories* and often more absolute fat. For overall fat loss, total caloric deficit matters most."
      },
    ]
  },
  {
    id: "energy-balance",
    title: "Energy Balance",
    color: "#F59E0B",
    icon: "⚖️",
    summary: [
      { heading: "The Energy Balance Equation", content: "Energy Intake vs. Energy Expenditure. Caloric Balance (=): Weight stable. Caloric Deficit (<): Weight loss. Caloric Surplus (>): Weight gain. This is the fundamental principle of weight management." },
      { heading: "Total Energy Expenditure (TEE)", content: "1. Resting Metabolic Rate (RMR): ~60–75% of TEE; calories to sustain life at rest. 2. Non-Exercise Activity Thermogenesis (NEAT): fidgeting, daily movement. 3. Thermic Effect of Feeding (TEF): ~10% of TEE; PRO costs ~30%, CHO ~10%, FAT ~5%. 4. Exercise: voluntary physical activity." },
      { heading: "Estimating RMR", content: "Cunningham Equation: RMR = 500 + 22(kg FFM). Mifflin-St. Jeor and Harris-Benedict also used. Multiply by activity factor for TDEE. Wrist devices: reasonable for HR, POOR for energy expenditure." },
      { heading: "Using RER to Calculate Energy Expenditure", content: "Example: RER 0.80 = 4.80 kcal/L O₂. If client burns 5 L O₂ in 20 min: 4.80 × 5 = 24 kcal. Extrapolate to full day. RER 0.90 = 4.92 kcal/L O₂." },
      { heading: "Weight Loss Strategies", content: "Reduce 'empty calories' first (alcohol, SSBs). Increase satiety: more fiber, protein, water. Lower caloric density: whole fruit > juice, Greek yogurt > ice cream. Slow down eating: 20 min for satiety signals. Eat regularly to avoid extreme hunger. Aim for ~0.5% body mass loss/week." },
      { heading: "Weight Gain Strategies (Muscle)", content: "Resistance training + high protein (1.6–2.2 g/kg). Caloric balance or modest surplus (+250–500 kcal/day). Add high-calorie snacks (nuts, nut butters, avocados, dried fruit). Spread calories throughout the day. Pre-sleep nutrition. Aim for ~0.5 lb/week lean mass gain." },
      { heading: "Psychological Approaches", content: "Growth mindset > all-or-nothing thinking. Track calories to establish baseline. Don't villainize foods — all foods fit in moderation. Combat apathy; celebrate wins. Know your tendencies (e.g., trigger foods in the house). Hunger is physiological but filtered through perception." },
    ],
    flashcards: [
      { front: "What are the 4 components of Total Energy Expenditure (TEE)?", back: "1. Resting Metabolic Rate (RMR) — ~60–75% of TEE\n2. NEAT (Non-Exercise Activity Thermogenesis)\n3. Thermic Effect of Feeding (TEF) — ~10% of TEE\n4. Exercise" },
      { front: "What is the Thermic Effect of Feeding (TEF) for each macronutrient?", back: "Protein: ~30% of calories consumed\nCarbohydrate: ~10%\nFat: ~5%\nHigh protein diets therefore increase TEF and total energy expenditure" },
      { front: "What is the Cunningham equation for RMR?", back: "RMR = 500 + 22 × (kg of Fat-Free Mass)\nThis equation accounts for body composition, making it better than weight-based equations for lean individuals" },
      { front: "How is energy expenditure calculated from RER and VO₂?", back: "Energy expenditure = kcal/L O₂ × liters of O₂ consumed\nRER 0.70 = 4.69 kcal/L; RER 0.80 = 4.80 kcal/L; RER 0.90 = 4.92 kcal/L; RER 1.00 = 5.05 kcal/L" },
      { front: "How do you determine if you're in energy balance?", back: "Track weight trends over 14–30 days (not single-day fluctuations)\nWeight fluctuates due to: GI content, hydration, bloating, sodium, hormones\nAlso track caloric intake with apps (MyFitnessPal, MacroFactor)" },
      { front: "What is the recommended rate of fat loss per week?", back: "~0.5% of body mass per week\nSlow enough to preserve lean mass, fast enough to maintain motivation\nAlso target ~0.5 lb/week lean mass gain when building muscle" },
      { front: "What does the Satiety Index measure?", back: "Relative satiety of foods after a 240-kcal serving (normalized to white bread = 100%)\nFoods high in water, fiber, and protein score highest\nHelps guide food choices for hunger management" },
      { front: "Why is eating slowly beneficial for weight management?", back: "It takes ~20 minutes for hunger/satiety hormones (ghrelin, leptin) to signal fullness\nEating too fast leads to overconsumption before satiety is perceived" },
      { front: "What is caloric density and how can it help with weight loss?", back: "Caloric Density = calories per gram of food\nLow-density: fruits, vegetables (high water/fiber content)\nHigh-density: nuts, oils, processed foods\nEating lower-density foods allows more volume with fewer calories" },
      { front: "What is the effect of high protein intake on body composition?", back: "1. Increases TEF (costs more energy to digest)\n2. Increases muscle protein synthesis (MPS)\n3. Highest satiety per calorie\n4. Preserves lean mass during caloric restriction" },
      { front: "What drives muscle protein synthesis (MPS)?", back: "1. Resistance Exercise / Weight training\n2. High protein intake (quality and quantity)\nSynergistic effect: RT + PRO > either alone for hypertrophy" },
      { front: "For lean muscle gain, what caloric approach is recommended?", back: "Caloric balance or modest surplus (+250–500 kcal/day)\nFocus surplus on CHO (carbohydrates) to support exercise\nKeep fat at 20–35% of total calories\nProtein: 1.6–2.2 g/kg body weight" },
    ],
    quiz: [
      {
        question: "Which component of Total Energy Expenditure (TEE) accounts for the LARGEST percentage in a sedentary individual?",
        options: ["A. Exercise", "B. Thermic Effect of Feeding (TEF)", "C. Resting Metabolic Rate (RMR)", "D. NEAT"],
        answer: "C",
        explanation: "RMR accounts for ~60–75% of TEE in most individuals. It represents the calories needed to sustain basic physiological functions (heart rate, breathing, organ function) at complete rest."
      },
      {
        question: "A client with an RER of 0.90 consumes 50 liters of O₂ during a 20-minute run. How many kcal did she burn?",
        options: ["A. 234 kcal", "B. 246 kcal", "C. 252 kcal", "D. 280 kcal"],
        answer: "B",
        explanation: "RER 0.90 = 4.92 kcal/L O₂. Energy = 4.92 × 50 = 246 kcal. This is the standard calculation used in exercise physiology to determine energy expenditure from indirect calorimetry."
      },
      {
        question: "Which macronutrient has the HIGHEST Thermic Effect of Feeding (TEF)?",
        options: ["A. Fat (~5%)", "B. Carbohydrate (~10%)", "C. Protein (~30%)", "D. Fiber (~15%)"],
        answer: "C",
        explanation: "Protein requires ~30% of its caloric content for digestion, absorption, and storage (amino acid turnover, urea synthesis, etc.). This is 3× higher than CHO and 6× higher than fat, making high-protein diets metabolically advantageous for weight management."
      },
      {
        question: "A client has been eating 2,500 kcal/day for 4 weeks and their weight has been stable. They now want to lose fat at 0.5% BM/week. Their body weight is 80 kg. What is the most appropriate adjustment?",
        options: [
          "A. Reduce intake by 1,000 kcal/day immediately",
          "B. Increase exercise to 2 hours/day without changing intake",
          "C. Create a moderate caloric deficit through reduced intake and/or increased exercise",
          "D. Eliminate all carbohydrates from the diet"
        ],
        answer: "C",
        explanation: "A sustainable fat loss rate of ~0.5% BM/week (~400g for 80kg person) requires a moderate caloric deficit created through reduced intake, increased exercise, or both. Extreme restriction compromises lean mass, performance, and adherence."
      },
      {
        question: "The Cunningham Equation (RMR = 500 + 22 × kg FFM) is considered more accurate for athletes than the Harris-Benedict Equation because:",
        options: [
          "A. It uses total body weight instead of fat-free mass",
          "B. It accounts for body composition (FFM), which is more metabolically active",
          "C. It was developed specifically for female athletes",
          "D. It includes the thermic effect of feeding"
        ],
        answer: "B",
        explanation: "Fat-free mass (muscle, organs) drives RMR, not fat mass. Using FFM directly makes the Cunningham equation more accurate for athletes who have higher muscle mass relative to body weight."
      },
      {
        question: "A research participant reports feeling very full after eating a high-fiber, high-protein meal. Approximately how long after eating does satiety signaling typically peak?",
        options: ["A. 5 minutes", "B. 20 minutes", "C. 45 minutes", "D. 60 minutes"],
        answer: "B",
        explanation: "Satiety hormones (leptin, GLP-1, CCK) take approximately 20 minutes to signal fullness. Eating too rapidly leads to overconsumption before this feedback occurs, a key principle in mindful eating interventions."
      },
      {
        question: "Research comparing moderate-intensity (Zone 2) training vs. high-intensity interval training (HIIT) for improving VO₂max shows:",
        options: [
          "A. Zone 2 is superior for VO₂max improvement",
          "B. HIIT is superior for VO₂max improvement",
          "C. Both have identical effects on VO₂max",
          "D. Neither significantly affects VO₂max"
        ],
        answer: "B",
        explanation: "Research (including the 2024 paper cited in lectures) found that only heavy, severe, and extreme intensity exercise — not moderate intensity (Zone 2) — significantly improved VO₂max and lactate thresholds. Zone 2 excels for fat oxidation and metabolic efficiency, not maximal aerobic capacity."
      },
    ]
  },
  {
    id: "gi-tract",
    title: "Intro to the GI Tract",
    color: "#8B5CF6",
    icon: "🔬",
    summary: [
      { heading: "GI Tract Overview", content: "Organs in order: Mouth → Esophagus → Stomach → Small Intestine (Duodenum → Jejunum → Ileum) → Large Intestine → Rectum/Anus. Supporting organs: Liver (bile), Gallbladder (stores bile), Pancreas (bicarbonate + enzymes)." },
      { heading: "Three Major GI Functions", content: "1. Peristalsis: contractions that propel contents along the GI tract. 2. Secretion: acid (HCl), enzymes, bicarbonate, bile. 3. Absorption: primarily in the duodenum and jejunum (~95% of absorption)." },
      { heading: "Digestion by Organ", content: "Mouth: mechanical (chewing) + salivary amylase (CHO). Stomach: HCl + proteases; holds 1.5–6L; churning homogenizes food. Small intestine: chemical digestion (lipases, amylases, proteases) + absorption. Large intestine: absorbs water, electrolytes, and fermentation products (short-chain fatty acids)." },
      { heading: "Digestive Enzymes", content: "Amylases (CHO digestion) — Lipases (FAT digestion) — Proteases (PRO digestion). Brush-border enzymes: Disaccharidases (CHO) and Dipeptidases (PRO). Pancreas secretes bicarbonate to neutralize stomach acid in small intestine." },
      { heading: "Bile Salts", content: "Produced by the liver; stored and secreted by the gallbladder upon arrival of fatty food. Emulsify fats: amphipathic molecules (1 part hydrophilic, 1 part hydrophobic) that dissolve lipids in the aqueous environment of the small intestine." },
      { heading: "Gastric Emptying", content: "Factors that INCREASE (speed): larger gastric volume, hypotonic solutions, exercise at low-moderate intensity, electrolyte content. Factors that DECREASE (slow): high energy content, high osmolality, high-fat content, high exercise intensity. Fastest: hypotonic fluids (vs. blood). Slowest: hypertonic solutions." },
      { heading: "Osmolality and Absorption", content: "Blood osmolality: ~285 mOsm/L. If gut contents are hypertonic (>285), water is pulled FROM blood INTO gut — can cause GI distress. Hypotonic solutions empty fastest and absorb quickest. Key for sports drinks and hydration during exercise." },
    ],
    flashcards: [
      { front: "In what order do the major sections of the small intestine occur?", back: "1. Duodenum (~1 foot) — first segment, receives bile and pancreatic juice\n2. Jejunum (~8 feet) — primary absorption site\n3. Ileum (~10 feet) — absorption of bile salts, B12\n~95% of absorption occurs in duodenum and jejunum" },
      { front: "What is the role of salivary amylase?", back: "Begins chemical digestion of carbohydrates in the mouth\nBreaks down starch (polysaccharides) into smaller chains\nDenatured by HCl in the stomach" },
      { front: "What is the function of bile salts?", back: "Produced by liver; stored in gallbladder\nEmulsify fats: their amphipathic structure (hydrophilic + hydrophobic portions) allows fat to be dispersed in the aqueous gut environment for lipase access" },
      { front: "What is the blood osmolality and why does it matter for GI function?", back: "Blood: ~285 mOsm/L\nIf gut contents are MORE concentrated (hypertonic), water is pulled from blood into gut → bloating, cramping\nHypotonic solutions (<285 mOsm) empty fastest and absorb quickest" },
      { front: "What are the 3 main causes of GI problems during exercise?", back: "1. Physiological: Reduced blood flow to gut (increased to muscles)\n2. Nutritional: High-concentration foods slow gastric emptying\n3. Mechanical: Physical jostling (especially in running) disrupts gut" },
      { front: "What enzyme produced by the pancreas neutralizes stomach acid in the small intestine?", back: "Bicarbonate (not an enzyme — it's a buffer)\nAlso secretes: Pancreatic amylase (CHO), lipases (FAT), proteases (PRO)\nNeutralizes HCl from stomach to create optimal pH for small intestine enzymes" },
      { front: "What are the 3 functions of the large intestine?", back: "1. Absorbs large quantities of fluid and electrolytes (converts liquid to solid stool)\n2. Absorbs short-chain fatty acids from bacterial fermentation of undigested CHO\n3. Harbors bacteria that produce Vitamin K and some B vitamins" },
      { front: "What factors SPEED UP gastric emptying?", back: "• Larger gastric volume\n• Hypotonic solutions (vs. blood)\n• Low energy content\n• Electrolyte content\n• Low-to-moderate exercise intensity\n• Upright position" },
      { front: "What factors SLOW DOWN gastric emptying?", back: "• High energy content\n• High fat content\n• Hypertonic solutions\n• High exercise intensity\n• High fiber content\n• Lying down" },
      { front: "What is GERD and what structure malfunctions?", back: "Gastroesophageal Reflux Disease (acid reflux / heartburn)\nThe Lower Esophageal Sphincter (LES) fails to prevent backflow of stomach acid into esophagus\nNormally LES allows one-way travel of food from esophagus to stomach" },
      { front: "Where does absorption primarily occur in the GI tract?", back: "Primary absorption site: Small intestine (duodenum + jejunum)\n~95% of nutrients absorbed here\nLarge intestine absorbs water, electrolytes, and SCFA\nStomach: absorption is minimal" },
      { front: "What is peristalsis?", back: "Wave-like muscular contractions that propel GI contents forward (caudad movement)\nCircular muscle contracts behind bolus while longitudinal muscle relaxes, and vice versa ahead of bolus\nPrimary mechanism for moving food through the GI tract" },
    ],
    quiz: [
      {
        question: "A sports dietitian recommends an athlete drink a hypotonic sports drink (osmolality < 285 mOsm/L) before competition. What is the PRIMARY physiological rationale?",
        options: [
          "A. Hypotonic solutions provide more electrolytes per serving",
          "B. Hypotonic solutions empty from the stomach faster and are absorbed more quickly",
          "C. Hypotonic solutions reduce bile salt production",
          "D. Hypotonic solutions slow gastric emptying, reducing GI distress"
        ],
        answer: "B",
        explanation: "Hypotonic solutions (lower concentration than blood at 285 mOsm/L) have faster gastric emptying rates and are absorbed more rapidly because they do not require dilution before absorption. This is critical for rapid hydration and carbohydrate delivery during exercise."
      },
      {
        question: "An athlete consumes a high-fat, high-fiber meal 2 hours before a race and experiences GI distress. Which factor MOST likely contributed to slowed gastric emptying?",
        options: [
          "A. High water content of the meal",
          "B. Low caloric density of the meal",
          "C. High fat and fiber content slowing gastric emptying",
          "D. Hypotonic composition of the meal"
        ],
        answer: "C",
        explanation: "High fat and fiber significantly slow gastric emptying. Fat triggers cholecystokinin (CCK) release, which slows stomach motility. Fiber creates bulk and viscosity. Pre-competition meals should be low in fat and fiber to ensure rapid gastric emptying."
      },
      {
        question: "Which supporting organ produces bile salts and which organ stores and secretes them?",
        options: [
          "A. Produced: Pancreas; Stored: Liver",
          "B. Produced: Liver; Stored: Gallbladder",
          "C. Produced: Gallbladder; Stored: Duodenum",
          "D. Produced: Stomach; Stored: Jejunum"
        ],
        answer: "B",
        explanation: "The LIVER produces bile salts continuously. The GALLBLADDER stores bile and releases it into the duodenum when fatty food arrives. Bile salts emulsify fats, allowing lipases to access and digest triglycerides."
      },
      {
        question: "Approximately what percentage of nutrient absorption occurs in the duodenum and jejunum?",
        options: ["A. 40%", "B. 65%", "C. 80%", "D. 95%"],
        answer: "D",
        explanation: "~95% of absorption occurs in the duodenum (first ~1 foot) and jejunum (next ~8 feet) of the small intestine. The ileum handles specialized absorption (bile salts, vitamin B12). This concentration of absorption in the proximal small intestine has major implications for GI surgery and disease."
      },
      {
        question: "During intense exercise, blood flow is redirected away from the GI tract to working muscles (functional sympatholysis). What GI consequence is most likely?",
        options: [
          "A. Increased gastric acid production",
          "B. Enhanced nutrient absorption",
          "C. Slowed gastric emptying and increased risk of GI distress",
          "D. Increased peristalsis"
        ],
        answer: "C",
        explanation: "The sympathetic nervous system redirects blood flow to exercising muscles, reducing splanchnic (GI) blood flow. This impairs GI motility and gastric emptying, increasing risk of nausea, cramping, and diarrhea — common in high-intensity endurance events."
      },
      {
        question: "If blood osmolality is 285 mOsm/L and gut contents are 600 mOsm/L, what will happen?",
        options: [
          "A. Water will move from the gut into the blood",
          "B. Water will move from the blood into the gut",
          "C. No movement will occur because the body maintains homeostasis",
          "D. Blood osmolality will decrease to match gut contents"
        ],
        answer: "B",
        explanation: "Osmosis moves water from areas of LOW solute concentration to HIGH solute concentration. With gut contents more concentrated (600 vs 285 mOsm/L), water is pulled OUT of the blood INTO the gut, potentially causing dehydration, bloating, and diarrhea."
      },
      {
        question: "What is the role of brush-border enzymes in the small intestine?",
        options: [
          "A. They produce HCl acid for chemical digestion",
          "B. They transport nutrients across the intestinal wall into the bloodstream",
          "C. They complete final digestion of disaccharides and dipeptides at the intestinal cell surface",
          "D. They secrete bile for fat emulsification"
        ],
        answer: "C",
        explanation: "Brush-border enzymes (disaccharidases and dipeptidases) are embedded in the microvilli of enterocytes (intestinal cells). They complete the final breakdown of disaccharides → monosaccharides and dipeptides → amino acids before absorption across the intestinal membrane."
      },
    ]
  },
  {
    id: "macronutrients",
    title: "Macronutrients",
    color: "#EF4444",
    icon: "🥗",
    summary: [
      { heading: "Macronutrient Overview", content: "Macronutrients: Carbohydrates (CHO), Lipids (FAT), Protein (PRO). Micronutrients: Vitamins, Minerals, Water. Nutrient = chemical substance in food contributing to survival and growth. Energy yields: CHO = 4 kcal/g, FAT = 9 kcal/g, PRO = 4 kcal/g." },
      { heading: "Carbohydrates (CHO)", content: "C₆H₁₂O₆ structure. Stored as blood glucose and glycogen (liver + muscle). Classifications: Monosaccharides (glucose, fructose, galactose), Disaccharides (sucrose, lactose, maltose), Polysaccharides (starches, fiber). RDA: 130 g/day; 45–65% of total calories recommended. Fiber: Men 38 g/day, Women 25 g/day. Amylose = slow digestion; Amylopectin = fast digestion." },
      { heading: "Fats (Lipids)", content: "Energy: 9 kcal/g. Storage: adipose tissue (unlimited) and IMTG (~1,800 kcal). Saturated fatty acids (SFA): straight chain, solid at room temperature. Unsaturated fatty acids (UFA): bent chain (double bond), liquid at RT. MUFA: 1 double bond (olive oil, canola). PUFA: 2+ double bonds. Omega-3s (ALA, EPA, DHA) are essential: anti-inflammatory, supports MPS, cognitive function. RDA for fat: 20–35% of total calories; NO RDA." },
      { heading: "Protein", content: "C-H-O-N structure; 4 kcal/g. 20 amino acids: 9 essential (must be ingested), 11 non-essential. Functions: blood clotting, fluid balance, hormone/enzyme production, tissue repair, neurotransmitters. Biological Value (BV): measure of EAA completeness (animal proteins > plant proteins). Complementary proteins: combining plant sources to get all EAAs. RDA: 0.8 g/kg/day (general); athletes may need 1.6–2.2 g/kg/day." },
      { heading: "Water", content: "60–70% of body mass (~40+ liters). Muscle: ~73% water; Adipose: ~15–20% water. 2.7 g of water stored per gram of glycogen. Functions: solvent, transport, thermoregulation, joint lubrication, chemical medium. Critical to life." },
      { heading: "Reading Food Labels", content: "Fat: 9 kcal/g. CHO: 4 kcal/g. PRO: 4 kcal/g. %DV based on 2,000 kcal/day reference. Verify calorie math: multiply grams × kcal/g for each macro and sum. HFCS: 42% fructose in processed foods; 55% in sodas." },
    ],
    flashcards: [
      { front: "What are the caloric values per gram for each macronutrient?", back: "Carbohydrate: 4 kcal/g\nProtein: 4 kcal/g\nFat: 9 kcal/g\nAlcohol: 7 kcal/g (not a macronutrient but has calories)" },
      { front: "What are essential fatty acids and why are they 'essential'?", back: "Essential Fatty Acids (EFAs) cannot be synthesized by the body and MUST be consumed in the diet\n• ALA (alpha-linolenic acid) — plant sources, omega-3\n• LA (linoleic acid) — omega-6\nALA can be converted to EPA and DHA (but inefficiently)" },
      { front: "What are the 3 types of omega-3 fatty acids and their sources?", back: "1. ALA (alpha-linolenic acid): walnuts, flaxseed, chia, canola — must eat\n2. EPA (eicosapentaenoic acid): fish, algae\n3. DHA (docosahexaenoic acid): fish, algae\nEPA/DHA more bioavailable; ALA conversion to EPA/DHA is inefficient" },
      { front: "What is the difference between saturated and unsaturated fatty acids?", back: "SFA: No double bonds; straight chain; solid at room temperature (butter, lard, coconut oil); linked to ↑CVD risk\nMUFA: 1 double bond; liquid at RT (olive, canola oil) — heart healthy\nPUFA: 2+ double bonds; liquid at RT (fish oil, flaxseed) — heart healthy" },
      { front: "What is Biological Value (BV) of protein?", back: "BV measures how completely a protein supplies Essential Amino Acids (EAAs)\nHigh BV: whey, eggs, milk (animal sources)\nLow BV: most plant proteins (incomplete — missing some EAAs)\nComplementary proteins combine to complete the EAA profile" },
      { front: "What are the 9 essential amino acids?", back: "Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Valine\nMnemonic: 'PVT TIM HaLL'\nMust be obtained from diet; body cannot synthesize them" },
      { front: "What is the fiber recommendation per day for men vs. women?", back: "Men: 38 g/day\nWomen: 25 g/day\nFiber reduces hunger, dampens blood sugar spikes, binds fats/chemicals, gives bulk to stool, shortens GI transit time" },
      { front: "What are simple vs. complex carbohydrates?", back: "Simple CHO (Sugars):\n• Monosaccharides (glucose, fructose, galactose)\n• Disaccharides (sucrose, lactose, maltose)\n→ Rapidly digested, fast blood glucose rise\n\nComplex CHO (Starches/Fiber):\n• Polysaccharides (amylose, amylopectin, maltodextrin, fiber)\n→ Slower digestion and absorption" },
      { front: "What is High Fructose Corn Syrup (HFCS) and where is it found?", back: "Syrup made of fructose + glucose (76% CHO, 24% water)\nHFCS 42: processed foods, cereals (42% fructose)\nHFCS 55: sodas/soft drinks (55% fructose)\nHFCS 70: jellies (70% fructose)" },
      { front: "What is the RDA for protein?", back: "General population: 0.8 g/kg/day\nFood and Nutrition Board: 10–35% of total caloric intake\nAthletes may need 1.2–2.2 g/kg/day depending on goal (endurance vs. strength)\n1 kg = 2.2 lbs" },
      { front: "What functions does water serve in the body?", back: "• Solvent for chemical reactions\n• Transports nutrients and waste\n• Thermoregulation (sweat)\n• Lubricates joints (synovial fluid)\n• Component of saliva and bile\n• Removes metabolic waste" },
      { front: "What is caloric density vs. nutrient density?", back: "Caloric Dense: high kcal per 100g (oils, nuts, candy)\nNutrient Dense: high nutrients per 100g with relatively fewer calories (vegetables, lean protein, fruit)\nGoal: maximize nutrient density, manage caloric density for body composition goals" },
    ],
    quiz: [
      {
        question: "A food label lists 8g fat, 37g carbohydrate, and 3g protein per serving. Calculating from macronutrient energy values, the total caloric content should be approximately:",
        options: ["A. 195 kcal", "B. 220 kcal", "C. 232 kcal", "D. 240 kcal"],
        answer: "C",
        explanation: "Fat: 8 × 9 = 72 kcal; CHO: 37 × 4 = 148 kcal; PRO: 3 × 4 = 12 kcal. Total = 72 + 148 + 12 = 232 kcal. This calculation is fundamental for reading food labels accurately."
      },
      {
        question: "Why are omega-3 fatty acids classified as 'essential' fatty acids?",
        options: [
          "A. They provide the most energy per gram among all fats",
          "B. The body cannot synthesize them in adequate quantities and they must be obtained from diet",
          "C. They are only found in animal products",
          "D. They are required only during periods of intense exercise"
        ],
        answer: "B",
        explanation: "Essential nutrients are those the body cannot synthesize in sufficient amounts. ALA (alpha-linolenic acid, an omega-3) must be consumed from diet. While ALA can be converted to EPA and DHA, this conversion is inefficient, making direct EPA/DHA sources important."
      },
      {
        question: "Which carbohydrate structure digests MOST slowly and has the LOWEST glycemic impact?",
        options: [
          "A. Glucose (monosaccharide)",
          "B. Sucrose (disaccharide)",
          "C. Amylopectin (highly branched polysaccharide)",
          "D. Amylose (linear chain polysaccharide)"
        ],
        answer: "D",
        explanation: "Amylose has a linear, helical structure (200–4,000 glucose units in a coil) that digests slowly due to limited enzyme access points. Amylopectin is highly branched with many enzyme access points, so it digests rapidly. Monosaccharides and disaccharides require minimal digestion."
      },
      {
        question: "A vegan athlete consumes beans and rice together at every meal. The nutritional rationale for this combination is:",
        options: [
          "A. It increases caloric density",
          "B. It creates a complementary protein — combining incomplete plant proteins to provide all essential amino acids",
          "C. It increases fat intake needed for hormone production",
          "D. It eliminates the need for all supplementation"
        ],
        answer: "B",
        explanation: "Beans are low in methionine but high in lysine; rice is low in lysine but high in methionine. Combined, they provide all 9 essential amino acids, creating a 'complete' complementary protein. This concept is critical for plant-based athletes."
      },
      {
        question: "From a cardiovascular disease risk perspective, replacing saturated fatty acids (SFA) with unsaturated fatty acids (UFA) is associated with:",
        options: [
          "A. No change in cardiovascular risk",
          "B. Increased risk of cardiovascular events",
          "C. Decreased risk of CVD events (15% lower) and CVD deaths (21% lower)",
          "D. Only beneficial if combined with statin medications"
        ],
        answer: "C",
        explanation: "Research (53,758 participants) found that high linoleic acid (LA, an omega-6 PUFA) intake is associated with 15% lower CVD event risk and 21% lower CVD death risk. Replacing SFA with UFA is a cornerstone of evidence-based nutritional cardiology."
      },
      {
        question: "An athlete reports consuming adequate calories but shows signs of vitamin and mineral deficiency. According to the macronutrient lecture, what is the most likely dietary issue?",
        options: [
          "A. Not enough fat in the diet",
          "B. Diet high in 'empty calories' (high caloric density, low nutrient density foods)",
          "C. Too much dietary fiber",
          "D. Excessive protein intake"
        ],
        answer: "B",
        explanation: "Caloric density ≠ nutritional density. Foods like soda, chips, and candy provide calories (mostly from simple sugars and fat) but minimal vitamins and minerals. An athlete eating adequate calories from nutrient-poor sources can be 'overfed but undernourished.'"
      },
      {
        question: "What is the current CHO Recommended Daily Allowance (RDA) and why was it set at this level?",
        options: [
          "A. 50 g/day — minimum to prevent ketosis",
          "B. 130 g/day — minimum for adequate brain glucose supply",
          "C. 300 g/day — to support athletic performance",
          "D. 400 g/day — to fully replenish muscle glycogen"
        ],
        answer: "B",
        explanation: "The CHO RDA is 130 g/day, set to provide the minimum amount needed to supply glucose to the brain and central nervous system (which requires ~120 g/day). Athletes need significantly more (6–12 g/kg/day) to support training demands."
      },
    ]
  },
  {
    id: "micronutrients",
    title: "Micronutrients",
    color: "#EC4899",
    icon: "💊",
    summary: [
      { heading: "Micronutrients Overview", content: "Vitamins and minerals do NOT provide calories but are essential for biological functions. They serve as co-enzymes in chemical reactions, regulators of energy release, and maintain homeostasis. Deficiency can develop in as little as 3–4 weeks." },
      { heading: "Vitamins: Fat-Soluble vs. Water-Soluble", content: "Fat-Soluble (A, D, E, K): dissolve in organic solvents; stored in large quantities; toxicity can occur (TUL); can be deficient for longer before symptoms appear. Water-Soluble (B complex, Vitamin C): dissolve in water; excreted in urine; most support energy metabolism as coenzymes; less risk of toxicity; deficiency develops faster." },
      { heading: "Key Vitamins for Athletes", content: "B vitamins (B1 Thiamin, B2 Riboflavin, B3 Niacin, B6, B12): primarily support energy metabolism. Folate: DNA synthesis. Vitamin C: antioxidant. Vitamin D: muscle function, bone health, immune function (synthesized from sunlight; also dietary). Vitamin E: antioxidant." },
      { heading: "Vitamin D Deep Dive", content: "Best indicator of status: 25(OH)D (25-hydroxy-vitamin D) in blood. DRI: 600 IU/day. Many athletes are deficient even those who play outdoors. Suboptimal Vitamin D linked to: acute illness risk, inflammatory injury, stress fractures, muscle pain/weakness, suboptimal muscle performance. Steps: Sun exposure → skin synthesis → liver activation → kidney further activation." },
      { heading: "Minerals: Major vs. Trace", content: "Major (>100 mg/day): Ca, P, Mg, Na, K, S, Cl. Trace (<100 mg/day): Fe, Zn, I, F, Se, Cu, Mn. Electrolytes (Na⁺, K⁺, Cl⁻, Mg²⁺, Ca²⁺): have electric charge when dissolved; essential for nerve impulse transmission and fluid balance." },
      { heading: "Key Minerals for Athletes", content: "Sodium (Na⁺): primary electrolyte in sweat; fluid balance. Potassium (K⁺): major intracellular ion; also lost in sweat. Calcium: 1,000–1,200 mg/day RDA; bone structure; absorption plateaus at 500 mg. Iron: 8 mg/day men, 18 mg/day women; hemoglobin (O₂ transport), myoglobin, cytochromes in ETC. Magnesium: decreases lactate, increases vertical jump; 400 mg/day. Zinc: involved in 200+ enzyme reactions." },
      { heading: "Iron & Anemia", content: "Iron found in hemoglobin (RBCs — O₂ transport), myoglobin (muscle), and cytochromes (ETC). Iron deficiency anemia: 3-part diagnosis. Serum ferritin = sensitive measure of iron stores. Heme iron (animal sources, e.g., red meat) > absorbed than non-heme (plant sources). Vitamin C increases non-heme iron absorption." },
    ],
    flashcards: [
      { front: "What are the 4 fat-soluble vitamins?", back: "A, D, E, K (mnemonic: 'ADEK')\nCharacteristics:\n• Stored in liver and adipose tissue\n• Can accumulate to toxic levels (TUL applies)\n• Longer time to develop deficiency\n• Require fat for absorption" },
      { front: "What is the best clinical indicator of Vitamin D status?", back: "25(OH)D — 25-hydroxy-vitamin D measured in the blood\nThis is the stable circulating form\nActive form: 1,25(OH)₂D (calcitriol) — but has short half-life\nDRI: 600 IU/day" },
      { front: "What is the RDA for iron for men vs. women?", back: "Men: 8 mg/day\nWomen: 18 mg/day (higher due to menstrual blood loss)\nIron is found in: Hemoglobin (O₂ transport in RBCs), Myoglobin (O₂ storage in muscle), Cytochromes (ETC in mitochondria)" },
      { front: "What are the health consequences of suboptimal Vitamin D status in athletes?", back: "• Increased risk of acute illness\n• Inflammatory injury\n• Stress fractures\n• Muscle pain and weakness\n• Suboptimal muscle performance\nMany athletes are deficient even with outdoor sun exposure" },
      { front: "What is the difference between heme and non-heme iron?", back: "Heme Iron: Found in animal foods (red meat, fish, poultry)\n• More bioavailable (~15–35% absorbed)\nNon-Heme Iron: Found in plants (spinach, legumes, fortified grains)\n• Less bioavailable (~2–20%)\n• Absorption enhanced by Vitamin C; inhibited by calcium, phytates, fiber" },
      { front: "What are the 3 criteria for iron deficiency anemia?", back: "1. Depleted iron stores (low serum ferritin)\n2. Reduced iron transport (low serum iron / high TIBC)\n3. Decreased hemoglobin concentration (below normal)\nAnemia impairs O₂ transport → reduced aerobic capacity" },
      { front: "What is the RDA for calcium and why is there an absorption plateau?", back: "RDA: 1,000–1,200 mg/day\nAbsorption plateaus at ~500 mg per dose\nOptimal dosing: spread throughout the day (multiple smaller doses)\nCalcium combines with phosphorus to form hydroxyapatite (bone mineral)" },
      { front: "What roles does magnesium play in athletic performance?", back: "• Maintains nerve and muscle function\n• Regulates heart rhythm and blood pressure\n• Promotes calcium absorption\n• Studied as ergogenic aid\n• Decreases lactate production\n• Increases vertical jump\nRDA: ~400 mg/day" },
      { front: "What are water-soluble vitamins and what is their primary role?", back: "B vitamins (B1, B2, B3, B5, B6, B7, B9, B12) + Vitamin C\n• Dissolve in water; excreted in urine\n• Act as coenzymes in energy metabolism (CHO, fat, protein catabolism)\n• Less risk of toxicity\n• Deficiency develops faster (not stored)" },
      { front: "What is the Tolerable Upper Limit (TUL) and how does it differ from RDA?", back: "RDA: meets needs of ~97.5% of healthy individuals\nEAR: meets needs of ~50% of healthy individuals\nTUL: maximum intake without known adverse side effects\nMore is NOT always better — excess fat-soluble vitamins can cause toxicity" },
      { front: "What electrolytes are most lost in sweat during exercise?", back: "Primary: Sodium (Na⁺)\nSecondary: Potassium (K⁺) — but smaller amounts relative to sodium\nAlso lost: Chloride (Cl⁻), Magnesium (Mg²⁺)\nAthletes may need above-normal sodium intake to replace sweat losses" },
      { front: "What are the 3 steps of Vitamin D activation?", back: "1. Sun exposure (UV-B) → skin synthesizes Vitamin D₃ (cholecalciferol)\n2. Liver → activates to 25(OH)D (primary circulating form; what we measure)\n3. Kidney → further activates to 1,25(OH)₂D (calcitriol; active hormone)" },
    ],
    quiz: [
      {
        question: "An athlete is diagnosed with iron deficiency anemia. Which combination of symptoms and lab findings would confirm this 3-part diagnosis?",
        options: [
          "A. High serum ferritin, high hemoglobin, low TIBC",
          "B. Low serum ferritin, low serum iron (high TIBC), low hemoglobin",
          "C. Normal hemoglobin, low vitamin B12, high reticulocyte count",
          "D. Low hematocrit only, with normal ferritin and TIBC"
        ],
        answer: "B",
        explanation: "Iron deficiency anemia progresses through 3 stages: 1) depleted stores (low ferritin), 2) impaired iron transport (low serum iron, high TIBC as the body tries to capture more iron), 3) reduced hemoglobin synthesis (anemia). All 3 criteria must be met for diagnosis."
      },
      {
        question: "Why do athletes who train outdoors regularly still frequently exhibit vitamin D deficiency?",
        options: [
          "A. Exercise destroys vitamin D before it can be absorbed",
          "B. Factors including skin tone, sunscreen use, geographic latitude, season, and training time limit skin synthesis",
          "C. Vitamin D is only obtained through diet, not sunlight",
          "D. Athletes have higher rates of kidney disease which impairs vitamin D activation"
        ],
        answer: "B",
        explanation: "Vitamin D synthesis from sunlight depends on UV-B intensity, which varies by latitude, season, time of day, and is blocked by sunscreen and clouds. Additionally, dark skin tones have lower synthesis efficiency. Indoor training and early morning/evening sessions further limit sun exposure."
      },
      {
        question: "A food scientist is comparing iron bioavailability from spinach vs. beef. Which statement is MOST accurate?",
        options: [
          "A. Spinach iron is more bioavailable because plants contain more iron per gram",
          "B. Beef iron (heme) is more bioavailable because it is not inhibited by phytates and fiber",
          "C. Both sources have equal bioavailability when consumed with vitamin C",
          "D. Bioavailability of iron is only determined by total milligrams consumed"
        ],
        answer: "B",
        explanation: "Heme iron from animal sources is absorbed at ~15–35%, while non-heme iron from plants is absorbed at ~2–20%. Plant iron absorption is inhibited by phytates, fiber, calcium, and polyphenols. Vitamin C enhances non-heme iron absorption but cannot fully equalize bioavailability."
      },
      {
        question: "Fat-soluble vitamins (A, D, E, K) differ from water-soluble vitamins in all of the following ways EXCEPT:",
        options: [
          "A. Fat-soluble vitamins can be stored in large quantities",
          "B. Fat-soluble vitamins carry a greater toxicity risk",
          "C. Fat-soluble vitamins require dietary fat for absorption",
          "D. Fat-soluble vitamins serve as coenzymes in energy metabolism"
        ],
        answer: "D",
        explanation: "It is the WATER-SOLUBLE B vitamins that primarily serve as coenzymes in energy metabolism (CHO, fat, protein catabolism). Fat-soluble vitamins (ADEK) function in vision (A), bone/immune/muscle health (D), antioxidant protection (E), and blood clotting (K)."
      },
      {
        question: "Calcium absorption plateaus at approximately 500 mg per dose. What is the clinical implication for athletes taking calcium supplements?",
        options: [
          "A. Taking 1,500 mg in a single dose is optimal",
          "B. Calcium supplements should be divided into doses of ≤500 mg throughout the day",
          "C. Calcium absorption is not affected by dose size",
          "D. Athletes should avoid calcium supplements entirely"
        ],
        answer: "B",
        explanation: "Because calcium absorption saturates at ~500 mg per dose, taking the full RDA (1,000–1,200 mg) in one dose results in significantly less absorption than spreading it across 2–3 smaller doses throughout the day."
      },
      {
        question: "Which of the following best distinguishes macrominerals from trace minerals?",
        options: [
          "A. Macrominerals are more important for health than trace minerals",
          "B. Macrominerals require >100 mg/day intake; trace minerals require <100 mg/day",
          "C. Trace minerals are only found in animal food sources",
          "D. Macrominerals include iron, zinc, and selenium"
        ],
        answer: "B",
        explanation: "Classification is by required daily intake: macrominerals (Ca, P, Mg, Na, K, S, Cl) require >100 mg/day or >0.01% body weight. Trace elements (Fe, Zn, I, F, Se, Cu, Mn) require <100 mg/day. This distinction does NOT imply one category is more important than the other."
      },
      {
        question: "A meta-analysis involving 833,234 participants found that dietary supplement use (multivitamins) was NOT associated with reduced mortality. What is the most likely explanation?",
        options: [
          "A. Supplements are always harmful in large populations",
          "B. Supplements cannot correct deficiencies caused by poor diet",
          "C. Isolated nutrients in supplements may not replicate the synergistic effects of whole foods",
          "D. The study was flawed because it did not control for exercise"
        ],
        answer: "C",
        explanation: "Whole foods contain complex matrices of nutrients, phytochemicals, fiber, and antioxidants that interact synergistically. Isolated supplement forms cannot replicate these interactions. Additionally, supplements address deficiency but cannot compensate for an overall poor dietary pattern."
      },
    ]
  }
];

export const combinedFlashcards = [
  { front: "What is ATP and how long does the body store it?", back: "Adenosine Triphosphate — the body's only directly usable energy currency. Stored ATP lasts only ~1–3 seconds. All 3 energy systems continuously regenerate ATP." },
  { front: "Name the 3 energy systems and their primary fuels.", back: "1. Phosphagen: PCr + ADP → ATP (3–15 sec, anaerobic)\n2. Glycolytic: Glucose → Pyruvate, 2–3 ATP (seconds to ~2 min, anaerobic)\n3. Oxidative: TCA + ETC, ~32 ATP per glucose (minutes to hours, aerobic)" },
  { front: "What is the caloric value of CHO, FAT, and PRO per gram?", back: "CHO: 4 kcal/g\nFAT: 9 kcal/g\nPRO: 4 kcal/g\n(Fat is most energy-dense; CHO is fastest fuel)" },
  { front: "What are the components of Total Energy Expenditure (TEE)?", back: "1. RMR (~60–75% of TEE)\n2. NEAT (non-exercise movement)\n3. TEF (~10%; PRO=30%, CHO=10%, FAT=5%)\n4. Exercise (voluntary)" },
  { front: "Where does most nutrient absorption occur?", back: "Duodenum and Jejunum (small intestine) — ~95% of absorption\nLarge intestine: water, electrolytes, SCFA from fermentation" },
  { front: "What is RER and what values correspond to fat vs. CHO?", back: "RER = VCO₂ / VO₂\n0.70 = 100% fat oxidation\n0.85 = 50/50 fat/CHO\n1.00 = 100% CHO oxidation" },
  { front: "What are the fat-soluble vitamins?", back: "A, D, E, K (ADEK)\nStored in liver/adipose; can be toxic in excess; require fat for absorption" },
  { front: "What is the Cori Cycle?", back: "Lactate from working muscle → liver → gluconeogenesis → glucose → back to muscle\nRecycles metabolic byproducts of anaerobic glycolysis" },
  { front: "What factors influence gastric emptying?", back: "FASTER: larger volume, hypotonic, electrolytes, low-moderate exercise\nSLOWER: high energy, high fat, high fiber, hypertonic, high-intensity exercise" },
  { front: "What is the primary indicator of Vitamin D status?", back: "25(OH)D (25-hydroxy-vitamin D) in blood\nDRI: 600 IU/day; deficiency common even in outdoor athletes" },
  { front: "What is body recomposition?", back: "Simultaneous fat loss + lean mass gain\nRequires: resistance training + high protein + modest caloric deficit\nOptimal rate: ~0.5 lb/week lean gain, ~0.5% BM/week fat loss" },
  { front: "What are the 9 essential amino acids?", back: "Cannot be synthesized by the body:\nHistidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Valine\n(Mnemonic: PVT TIM HaLL)" },
  { front: "What is the primary electrolyte lost in sweat?", back: "Sodium (Na⁺) — primary electrolyte in sweat\nPotassium (K⁺) also lost but in smaller amounts\nReplacement important for fluid balance and nerve function" },
  { front: "How does endurance training affect fuel selection?", back: "Increases fat oxidation at a given absolute workload (glycogen sparing)\nShifts metabolic crossover to higher intensities\nIncreases mitochondrial density and fat-oxidizing enzymes" },
  { front: "What is the DEXA method and what does it measure?", back: "Dual-Energy X-ray Absorptiometry\nMeasures: bone mineral, fat mass, and lean tissue\nGold standard; can assess visceral fat; expensive and requires radiation exposure" },
  { front: "What are the 3 causes of GI distress during exercise?", back: "1. Physiological: reduced blood flow to gut\n2. Nutritional: high-fat/fiber/concentrated foods slow gastric emptying\n3. Mechanical: physical jostling (especially running)" },
  { front: "What does beta-oxidation produce and where does it occur?", back: "Location: Mitochondrial matrix\nProcess: Cleaves 2-carbon units as Acetyl-CoA from fatty acid chains\nYields: Acetyl-CoA → TCA cycle; also NADH and FADH₂ for ETC\nFat yields ~3–4× more ATP than glucose" },
  { front: "What is iron deficiency anemia and how is it diagnosed?", back: "Low hemoglobin concentration impairing O₂ transport\n3-part diagnosis:\n1. Low serum ferritin (depleted stores)\n2. Low serum iron / high TIBC\n3. Low hemoglobin concentration" },
];

export const combinedQuiz = [
  {
    question: "During a 400m race (~55 seconds), which combination of energy systems PRIMARILY contributes to ATP production?",
    options: [
      "A. Phosphagen only",
      "B. Oxidative only",
      "C. Phosphagen, Glycolytic, and Oxidative (with anaerobic glycolysis predominating)",
      "D. Beta-oxidation and TCA cycle"
    ],
    answer: "C",
    explanation: "A 400m race (~55 seconds) requires all 3 energy systems: PCr for initial acceleration, heavy anaerobic glycolysis for most of the race, and oxidative phosphorylation contributing as well. Anaerobic glycolysis predominates, which is why 400m runners experience significant lactic acid accumulation."
  },
  {
    question: "A nutritionist wants to reduce gastric emptying time before a competition. They should recommend which of the following pre-competition strategies?",
    options: [
      "A. A high-fat, high-fiber meal 1 hour before",
      "B. A hypotonic, low-fiber, low-fat carbohydrate source 2–3 hours before",
      "C. A protein-rich meal immediately before exercise",
      "D. A hypertonic sports drink immediately before the start"
    ],
    answer: "B",
    explanation: "Hypotonic solutions and low-fat/fiber foods empty fastest from the stomach. High fat and fiber dramatically slow gastric emptying. Immediate pre-exercise eating can cause GI distress. The goal is to have nutrients absorbed and available without GI contents that can cause cramping."
  },
  {
    question: "An athlete is following a 'high protein diet' (~2.0 g/kg/day) in a caloric deficit. Which outcome is most directly supported by the evidence regarding TEF and body composition?",
    options: [
      "A. High protein will increase TEF (~30% of protein calories), support MPS, and help preserve lean mass during fat loss",
      "B. High protein is only beneficial if consumed with carbohydrates",
      "C. High protein intake has no metabolic advantage over high carbohydrate intake",
      "D. High protein diets reduce RMR by suppressing metabolic activity"
    ],
    answer: "A",
    explanation: "Protein has the highest TEF (~30%), meaning 30% of protein calories are 'burned' in digestion/absorption. Combined with its role in muscle protein synthesis (MPS), high protein intake during caloric restriction preserves lean mass — a well-established evidence-based strategy."
  },
  {
    question: "Iron is found in all of the following EXCEPT:",
    options: [
      "A. Hemoglobin (oxygen transport in red blood cells)",
      "B. Myoglobin (oxygen storage in muscle)",
      "C. Cytochromes in the electron transport chain",
      "D. ATP synthase enzyme complex"
    ],
    answer: "D",
    explanation: "ATP synthase (Complex V of the ETC) does not contain iron. Iron is critical in hemoglobin (RBC oxygen transport), myoglobin (muscle oxygen storage), and cytochromes (iron-containing proteins that transfer electrons in the ETC). Iron deficiency therefore impairs both O₂ delivery AND aerobic ATP production."
  },
  {
    question: "A client has stable weight at 2,500 kcal/day. She exercised 20 min with an RER of 0.90 consuming 50L of O₂. She wants to track this exercise contribution. What is the most accurate calculation?",
    options: [
      "A. 200 kcal burned",
      "B. 220 kcal burned",
      "C. 246 kcal burned",
      "D. 300 kcal burned"
    ],
    answer: "C",
    explanation: "RER 0.90 = 4.92 kcal/L O₂. Energy = 4.92 × 50L = 246 kcal. This indirect calorimetry calculation is the most accurate non-invasive method of measuring exercise energy expenditure used in research and clinical settings."
  },
  {
    question: "Which body composition assessment method can simultaneously measure bone mineral density, visceral fat, and regional lean mass, making it the most comprehensive?",
    options: ["A. BMI", "B. Skinfold measurements", "C. Bioelectrical Impedance Analysis (BIA)", "D. DEXA"],
    answer: "D",
    explanation: "DEXA (Dual-Energy X-ray Absorptiometry) is the gold standard for body composition assessment. It provides bone mineral density (bone health), total and regional fat mass (including visceral), and lean tissue mass. No other non-invasive method provides this level of detail."
  },
  {
    question: "Comparing the digestion of fat vs. carbohydrates: which statement accurately describes a KEY difference?",
    options: [
      "A. Fat digestion begins in the mouth with lipase; CHO digestion begins in the stomach",
      "B. CHO digestion begins with salivary amylase in the mouth; fat digestion requires bile emulsification before lipase can act",
      "C. Both CHO and fat are fully digested in the stomach",
      "D. Fat digestion requires proteases; CHO digestion requires lipases"
    ],
    answer: "B",
    explanation: "CHO digestion begins in the mouth (salivary amylase cleaves starch) and continues in the small intestine. Fat digestion is minimal until the small intestine, where bile salts (from gallbladder) emulsify fat into small droplets, allowing pancreatic lipases to access and hydrolyze triglycerides."
  },
  {
    question: "An endurance athlete wants to 'spare glycogen' during a 3-hour race. Based on bioenergetics and nutrition principles, the MOST effective combined strategy would be:",
    options: [
      "A. Train at high intensity exclusively; avoid fat-containing foods",
      "B. Build aerobic base (shift crossover point) + consume carbohydrates during the race + ensure pre-race glycogen loading",
      "C. Take creatine supplements to increase PCr stores",
      "D. Eat only fat before and during the race"
    ],
    answer: "B",
    explanation: "Glycogen sparing requires a multi-pronged approach: (1) endurance training shifts the metabolic crossover point, increasing fat oxidation capacity; (2) exogenous CHO during exercise reduces reliance on endogenous glycogen; (3) pre-exercise glycogen loading maximizes starting stores. These are evidence-based strategies for endurance performance."
  },
  {
    question: "A vegetarian athlete is concerned about iron absorption from plant sources. Which two factors — one that ENHANCES and one that INHIBITS non-heme iron absorption — should the dietitian address?",
    options: [
      "A. Enhances: Vitamin C; Inhibits: Calcium",
      "B. Enhances: Calcium; Inhibits: Vitamin C",
      "C. Enhances: Fiber; Inhibits: Protein",
      "D. Enhances: Fat; Inhibits: Water"
    ],
    answer: "A",
    explanation: "Vitamin C (ascorbic acid) reduces Fe³⁺ to Fe²⁺, the more bioavailable form, and chelates iron to prevent it from being trapped by phytates. Calcium competes with iron for intestinal absorption pathways. Practical advice: eat iron-rich plant foods with Vitamin C (e.g., bell peppers), and avoid high-calcium foods at the same meal."
  },
  {
    question: "According to the Zone 2 cardio research discussed in the lecture, Zone 2 training (50–65% VO₂max) is BEST characterized as:",
    options: [
      "A. The optimal intensity for improving VO₂max and sport performance",
      "B. Excellent for fat oxidation, metabolic efficiency, and body composition with caloric deficit + protein; NOT optimal for VO₂max",
      "C. Too low in intensity to provide any health benefit",
      "D. Only beneficial for untrained individuals"
    ],
    answer: "B",
    explanation: "Multiple studies cited in lecture confirm Zone 2 improves mitochondrial function, metabolic efficiency, and fat oxidation — excellent for health and body composition with proper nutrition. However, research shows it does NOT significantly improve VO₂max; heavy, severe, or extreme intensities are required for that adaptation."
  },
];
