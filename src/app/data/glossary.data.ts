import { Term } from '../core/models';

/**
 * Exam vocabulary. Every entry is a word that actually shows up on the
 * 第二種電気工事士 paper, with the reading an N3 learner needs.
 */
export const GLOSSARY: Term[] = [
  /* ------------------------------------------------------------ theory */
  {
    jp: '電圧',
    explain:
      'The electrical push that makes current flow — think of water pressure in a pipe. Japanese sockets supply 100 V, with 200 V for large appliances.',
    kana: 'でんあつ',
    romaji: 'den’atsu',
    en: 'voltage',
    note: 'Unit ボルト (V).',
    category: 'theory',
  },
  {
    jp: '電流',
    explain:
      'The amount of electricity actually flowing, like the volume of water moving through the pipe. Too much current for the wire is what starts fires, so most of the rules in this trade exist to limit it.',
    kana: 'でんりゅう',
    romaji: 'denryū',
    en: 'current',
    note: 'Unit アンペア (A).',
    category: 'theory',
  },
  {
    jp: '抵抗',
    explain:
      'How strongly something fights the flow of current. Long or thin wire has more resistance, and resistance turns electricity into heat.',
    kana: 'ていこう',
    romaji: 'teikō',
    en: 'resistance',
    note: 'Unit オーム (Ω).',
    category: 'theory',
  },
  {
    jp: '電力',
    explain:
      'How fast electricity is being used right now. A 1000 W heater consumes ten times as fast as a 100 W lamp.',
    kana: 'でんりょく',
    romaji: 'denryoku',
    en: 'electric power',
    note: 'Unit ワット (W). P = VI.',
    category: 'theory',
  },
  {
    jp: '電力量',
    explain:
      'Power added up over time — this is what the meter bills you for. A 1000 W heater left on for 2 hours uses 2 kWh.',
    kana: 'でんりょくりょう',
    romaji: 'denryokuryō',
    en: 'electrical energy',
    note: 'Power × time, kWh. Do not confuse with 電力.',
    category: 'theory',
  },
  {
    jp: '直流',
    explain: 'Current that always flows the same way, as from a battery or a solar panel.',
    kana: 'ちょくりゅう',
    romaji: 'chokuryū',
    en: 'direct current (DC)',
    category: 'theory',
  },
  {
    jp: '交流',
    explain:
      'Current that reverses direction many times a second. This is what comes out of the wall, and the reason frequency and power factor matter at all.',
    kana: 'こうりゅう',
    romaji: 'kōryū',
    en: 'alternating current (AC)',
    category: 'theory',
  },
  {
    jp: 'オームの法則',
    explain:
      'The rule tying the three basics together: voltage = current × resistance. Know two of them and you can always find the third, which is where nearly every exam calculation starts.',
    kana: 'オームのほうそく',
    romaji: 'ōmu no hōsoku',
    en: 'Ohm’s law',
    note: 'V = IR',
    category: 'theory',
  },
  {
    jp: '直列接続',
    explain:
      'Parts joined end to end in one chain, so the same current flows through every one of them and their resistances add up.',
    kana: 'ちょくれつせつぞく',
    romaji: 'chokuretsu setsuzoku',
    en: 'series connection',
    note: 'Same current, resistances add.',
    category: 'theory',
  },
  {
    jp: '並列接続',
    explain:
      'Parts joined side by side across the same two points, so each gets the full voltage. House circuits are wired this way, which is why switching off one lamp does not kill the others.',
    kana: 'へいれつせつぞく',
    romaji: 'heiretsu setsuzoku',
    en: 'parallel connection',
    note: 'Same voltage, conductances add.',
    category: 'theory',
  },
  {
    jp: '合成抵抗',
    explain:
      'The single resistance value that a whole group of resistors behaves like. You work it out so a messy circuit can be treated as one simple one.',
    kana: 'ごうせいていこう',
    romaji: 'gōsei teikō',
    en: 'combined / equivalent resistance',
    category: 'theory',
  },
  {
    jp: '抵抗率',
    explain:
      'A number describing how resistant the material itself is, whatever shape it is in. Copper has a very low value, which is why wires are made of it.',
    kana: 'ていこうりつ',
    romaji: 'teikōritsu',
    en: 'resistivity (ρ)',
    note: 'R = ρL/A.',
    category: 'theory',
  },
  {
    jp: '導電率',
    explain:
      'The same idea as resistivity, stated the other way round: how easily a material lets current through.',
    kana: 'どうでんりつ',
    romaji: 'dōdenritsu',
    en: 'conductivity',
    category: 'theory',
  },
  {
    jp: '断面積',
    explain:
      'The area of the cut end of a conductor. A fatter conductor carries more current without overheating, so wire sizes are really statements about area.',
    kana: 'だんめんせき',
    romaji: 'danmenseki',
    en: 'cross-sectional area',
    note: 'mm². Thicker wire = less resistance.',
    category: 'theory',
  },
  {
    jp: '直径',
    explain:
      'The width across a round solid conductor. Japanese solid wire is ordered by diameter — 1.6, 2.0, 2.6 mm — rather than by area.',
    kana: 'ちょっけい',
    romaji: 'chokkei',
    en: 'diameter',
    note: 'Solid wire is sized by 直径 (1.6 mm, 2.0 mm, 2.6 mm).',
    category: 'theory',
  },
  {
    jp: 'ジュール熱',
    explain:
      'The heat a current produces as it forces its way through resistance. It is why a loose joint gets hot and why an overloaded cable can catch fire.',
    kana: 'ジュールねつ',
    romaji: 'jūru netsu',
    en: 'Joule heat',
    note: 'Q = I²Rt (joules).',
    category: 'theory',
  },
  {
    jp: '熱量',
    explain:
      'The total amount of heat produced, counted in joules. Multiply the power by the number of seconds it ran.',
    kana: 'ねつりょう',
    romaji: 'netsuryō',
    en: 'quantity of heat',
    note: '1 kWh = 3600 kJ.',
    category: 'theory',
  },
  {
    jp: '力率',
    explain:
      'How much of the electricity being delivered is doing real work. Motors and fluorescent fittings pull extra current that achieves nothing; power factor is the useful fraction.',
    kana: 'りきりつ',
    romaji: 'rikiritsu',
    en: 'power factor',
    note: 'cosθ = active power / apparent power.',
    category: 'theory',
  },
  {
    jp: '皮相電力',
    explain:
      'Voltage multiplied by current, ignoring whether the two are in step. It is what the cable and breaker actually have to carry, which is why equipment is rated in V·A.',
    kana: 'ひそうでんりょく',
    romaji: 'hisō denryoku',
    en: 'apparent power',
    note: 'Unit V·A.',
    category: 'theory',
  },
  {
    jp: '有効電力',
    explain:
      'The part of the power that really does something — heat, light, movement. Measured in watts, and the part you are billed for.',
    kana: 'ゆうこうでんりょく',
    romaji: 'yūkō denryoku',
    en: 'active (real) power',
    note: 'Unit W.',
    category: 'theory',
  },
  {
    jp: '無効電力',
    explain:
      'Power that sloshes back and forth between the supply and a coil or capacitor without doing any work. It achieves nothing but still takes up room in the cable.',
    kana: 'むこうでんりょく',
    romaji: 'mukō denryoku',
    en: 'reactive power',
    note: 'Unit var.',
    category: 'theory',
  },
  {
    jp: 'インピーダンス',
    explain:
      'The AC version of resistance: the total opposition to alternating current, combining ordinary resistance with the extra opposition of coils and capacitors.',
    kana: 'インピーダンス',
    romaji: 'inpīdansu',
    en: 'impedance (Z)',
    note: 'Z = √(R² + X²).',
    category: 'theory',
  },
  {
    jp: '誘導性リアクタンス',
    explain:
      'The opposition a coil puts up against AC. It grows with frequency, because a coil resists any change in current.',
    kana: 'ゆうどうせいリアクタンス',
    romaji: 'yūdōsei riakutansu',
    en: 'inductive reactance',
    note: 'X_L = 2πfL.',
    category: 'theory',
  },
  {
    jp: '容量性リアクタンス',
    explain:
      'The opposition a capacitor puts up against AC. It falls as frequency rises, because a capacitor passes rapidly changing current more easily.',
    kana: 'ようりょうせいリアクタンス',
    romaji: 'yōryōsei riakutansu',
    en: 'capacitive reactance',
    note: 'X_C = 1/(2πfC).',
    category: 'theory',
  },
  {
    jp: 'コンデンサ',
    explain:
      'A component that stores energy in an electric field. In this trade you meet it mostly wired across a motor, to improve the motor’s power factor.',
    kana: 'コンデンサ',
    romaji: 'kondensa',
    en: 'capacitor',
    category: 'theory',
  },
  {
    jp: '静電容量',
    explain:
      'How much charge a capacitor holds for a given voltage. More capacitance lets more AC through.',
    kana: 'せいでんようりょう',
    romaji: 'seiden yōryō',
    en: 'capacitance',
    note: 'Unit ファラド (F), usually μF.',
    category: 'theory',
  },
  {
    jp: '実効値',
    explain:
      'The standard way AC voltage is quoted: the steady DC value that would heat a wire by the same amount. When someone says 100 V they mean this; the peak is about 141 V.',
    kana: 'じっこうち',
    romaji: 'jikkōchi',
    en: 'RMS value',
    note: 'Peak ÷ √2. 「100 V」 means the RMS value.',
    category: 'theory',
  },
  {
    jp: '最大値',
    explain:
      'The highest point the AC wave actually reaches, √2 times the quoted value. Insulation has to survive the peak, not the average.',
    kana: 'さいだいち',
    romaji: 'saidaichi',
    en: 'peak value',
    category: 'theory',
  },
  {
    jp: '周波数',
    explain:
      'How many times a second the AC reverses. Japan is split down the middle — 50 Hz in the east, 60 Hz in the west — and that changes how fast motors turn.',
    kana: 'しゅうはすう',
    romaji: 'shūhasū',
    en: 'frequency',
    note: 'East Japan 50 Hz, West Japan 60 Hz.',
    category: 'theory',
  },
  {
    jp: '位相',
    explain:
      'How far one wave is through its cycle compared with another. When current lags behind voltage, that gap is what ruins the power factor.',
    kana: 'いそう',
    romaji: 'isō',
    en: 'phase',
    category: 'theory',
  },
  {
    jp: '単相',
    explain: 'A supply with a single alternating voltage. Houses and small shops get this.',
    kana: 'たんそう',
    romaji: 'tansō',
    en: 'single-phase',
    category: 'theory',
  },
  {
    jp: '三相',
    explain:
      'A supply with three alternating voltages staggered in time. It turns motors smoothly and pushes more power down the same size cable, so workshops and larger shops use it.',
    kana: 'さんそう',
    romaji: 'sansō',
    en: 'three-phase',
    category: 'theory',
  },
  {
    jp: 'スター結線',
    explain:
      'One of the two ways to join three-phase windings: one end of each is tied to a shared point. The voltage between two supply wires comes out √3 times the voltage across a single winding.',
    kana: 'スターけっせん',
    romaji: 'sutā kessen',
    en: 'star (Y) connection',
    note: 'Also 星形結線. Line voltage = √3 × phase voltage.',
    category: 'theory',
  },
  {
    jp: 'デルタ結線',
    explain:
      'The other way to join three-phase windings, in a closed triangle. Each winding gets the full supply voltage, and the supply current is √3 times the current in a winding.',
    kana: 'デルタけっせん',
    romaji: 'deruta kessen',
    en: 'delta (Δ) connection',
    note: 'Also 三角結線. Line current = √3 × phase current.',
    category: 'theory',
  },
  {
    jp: '相電圧',
    explain:
      'The voltage across one winding, or one leg of the load — as opposed to the voltage between two of the supply wires.',
    kana: 'そうでんあつ',
    romaji: 'sō den’atsu',
    en: 'phase voltage',
    category: 'theory',
  },
  {
    jp: '線間電圧',
    explain:
      'The voltage between two of the three supply wires. When a nameplate says three-phase 200 V, this is the figure it means.',
    kana: 'せんかんでんあつ',
    romaji: 'senkan den’atsu',
    en: 'line-to-line voltage',
    category: 'theory',
  },

  /* ------------------------------------------------------ wiring-design */
  {
    jp: '配電方式',
    explain:
      'Which arrangement of wires the supply arrives on. It decides what voltages are available and how you calculate voltage drop, so it is written at the service entrance on every drawing.',
    kana: 'はいでんほうしき',
    romaji: 'haiden hōshiki',
    en: 'distribution system type',
    category: 'wiring-design',
  },
  {
    jp: '単相2線式',
    explain:
      'The simplest supply: one live wire and one neutral, giving 100 V only. Fine for a small flat, but no way to run a 200 V air conditioner.',
    kana: 'たんそうにせんしき',
    romaji: 'tansō nisenshiki',
    en: 'single-phase 2-wire (1φ2W)',
    note: '100 V only.',
    category: 'wiring-design',
  },
  {
    jp: '単相3線式',
    explain:
      'The standard Japanese house supply: two live wires with a neutral between them. Either live to neutral gives 100 V for sockets, and live to live gives 200 V for an air conditioner or an IH hob.',
    kana: 'たんそうさんせんしき',
    romaji: 'tansō sansenshiki',
    en: 'single-phase 3-wire (1φ3W)',
    note: '100/200 V. The normal Japanese house supply.',
    category: 'wiring-design',
  },
  {
    jp: '三相3線式',
    explain:
      'Three live wires carrying voltages staggered in time, usually 200 V. Used wherever there are motors, because three-phase motors are simpler, smoother and cheaper than single-phase ones.',
    kana: 'さんそうさんせんしき',
    romaji: 'sansō sansenshiki',
    en: 'three-phase 3-wire (3φ3W)',
    note: '200 V motors, shops.',
    category: 'wiring-design',
  },
  {
    jp: '中性線',
    explain:
      'The wire sitting electrically in the middle of a single-phase three-wire supply, carrying the return current. It is white, it is earthed back at the transformer, and you must never put a fuse or a switch in it.',
    kana: 'ちゅうせいせん',
    romaji: 'chūseisen',
    en: 'neutral conductor',
    note: 'White. Never put a fuse or switch in it.',
    category: 'wiring-design',
  },
  {
    jp: '電圧降下',
    explain:
      'The voltage lost along the cable itself, so the appliance at the far end sees less than the supply provides. A long thin run loses more, which is why long runs use fatter cable.',
    kana: 'でんあつこうか',
    romaji: 'den’atsu kōka',
    en: 'voltage drop',
    category: 'wiring-design',
  },
  {
    jp: '電力損失',
    explain:
      'The power wasted heating the cable instead of reaching the load. It rises with the square of the current, so doubling the load quadruples the waste.',
    kana: 'でんりょくそんしつ',
    romaji: 'denryoku sonshitsu',
    en: 'line loss',
    note: 'P_loss = I²R per conductor.',
    category: 'wiring-design',
  },
  {
    jp: '許容電流',
    explain:
      'The most current a particular wire may carry continuously without getting too hot. Every wire size has its figure, and the breaker protecting it must be rated no higher.',
    kana: 'きょようでんりゅう',
    romaji: 'kyoyō denryū',
    en: 'allowable current (ampacity)',
    category: 'wiring-design',
  },
  {
    jp: '電流減少係数',
    explain:
      'A penalty applied when several wires share one pipe: crowded together they cannot shed heat, so each is allowed less current than it would be alone.',
    kana: 'でんりゅうげんしょうけいすう',
    romaji: 'denryū genshō keisū',
    en: 'current reduction factor',
    note: 'Applied when several conductors share one conduit.',
    category: 'wiring-design',
  },
  {
    jp: '幹線',
    explain:
      'The main artery from the incoming supply to the distribution board, before it splits into individual circuits. Sizing it is a set-piece exam calculation.',
    kana: 'かんせん',
    romaji: 'kansen',
    en: 'main feeder',
    category: 'wiring-design',
  },
  {
    jp: '分岐回路',
    explain:
      'One individual circuit fed from the distribution board — the lighting for a room, or the sockets in a kitchen. Each gets its own breaker.',
    kana: 'ぶんきかいろ',
    romaji: 'bunki kairo',
    en: 'branch circuit',
    category: 'wiring-design',
  },
  {
    jp: '過電流遮断器',
    explain:
      'Any device that cuts the supply when too much current flows, whether from a slow overload or a dead short. Fuses and breakers are both examples.',
    kana: 'かでんりゅうしゃだんき',
    romaji: 'kadenryū shadanki',
    en: 'overcurrent protective device',
    category: 'wiring-design',
  },
  {
    jp: '配線用遮断器',
    explain:
      'The ordinary switch-like breaker in a consumer unit. It trips when the current is too high and so protects the cable, and unlike a fuse you simply switch it back on.',
    kana: 'はいせんようしゃだんき',
    romaji: 'haisen’yō shadanki',
    en: 'miniature circuit breaker (MCB)',
    note: 'Symbol B on the drawing.',
    category: 'wiring-design',
  },
  {
    jp: '漏電遮断器',
    explain:
      'A breaker that checks whether all the current going out comes back again. If some is escaping to earth — possibly through a person — it disconnects in a fraction of a second.',
    kana: 'ろうでんしゃだんき',
    romaji: 'rōden shadanki',
    en: 'earth-leakage breaker (RCD)',
    note: 'Symbol BE / E. 定格感度電流 30 mA typical.',
    category: 'wiring-design',
  },
  {
    jp: '定格電流',
    explain:
      'The current a device is designed and marked for. A 20 A breaker will pass 20 A all day and is expected to trip above it.',
    kana: 'ていかくでんりゅう',
    romaji: 'teikaku denryū',
    en: 'rated current',
    category: 'wiring-design',
  },
  {
    jp: '需要率',
    explain:
      'The fraction of all the connected load that is realistically switched on at the same time. Nothing is ever fully loaded, so feeders are sized on this rather than on the grand total.',
    kana: 'じゅようりつ',
    romaji: 'juyōritsu',
    en: 'demand factor',
    category: 'wiring-design',
  },
  {
    jp: '不平衡率',
    explain:
      'How lopsided the two halves of a single-phase three-wire supply are. A big imbalance loads up the neutral and skews the voltages, so it is kept within limits.',
    kana: 'ふへいこうりつ',
    romaji: 'fuheikōritsu',
    en: 'unbalance ratio',
    note: '1φ3W load unbalance should stay ≤ 40 %.',
    category: 'wiring-design',
  },
  {
    jp: 'バランサ',
    explain:
      'A device that evens out an unbalanced single-phase three-wire supply so both halves share the load more equally.',
    kana: 'バランサ',
    romaji: 'baransa',
    en: 'balancer',
    note: 'Equalises a 1φ3W circuit.',
    category: 'wiring-design',
  },
  {
    jp: '引込線',
    explain:
      'The overhead or underground cable that brings the utility supply from the pole to the building.',
    kana: 'ひきこみせん',
    romaji: 'hikikomisen',
    en: 'service drop',
    category: 'wiring-design',
  },
  {
    jp: '電力量計',
    explain:
      'The utility meter recording how many kilowatt-hours the building has used. On a drawing it is the box marked Wh.',
    kana: 'でんりょくりょうけい',
    romaji: 'denryokuryōkei',
    en: 'watt-hour meter',
    note: 'Drawn as Wh.',
    category: 'wiring-design',
  },
  {
    jp: '分電盤',
    explain:
      'The box on the wall holding the main switch, the earth-leakage breaker and the individual circuit breakers. Every circuit in the building starts here.',
    kana: 'ぶんでんばん',
    romaji: 'bundenban',
    en: 'distribution board / consumer unit',
    category: 'wiring-design',
  },
  {
    jp: '対地電圧',
    explain:
      'The voltage between a wire and the earth, which is not always the voltage between two wires. It is the figure that decides insulation-resistance limits and when earthing may be omitted.',
    kana: 'たいちでんあつ',
    romaji: 'taichi den’atsu',
    en: 'voltage to earth',
    note: 'Key number for insulation resistance limits.',
    category: 'wiring-design',
  },
  {
    jp: '屋内配線',
    explain:
      'All the fixed wiring inside a building, from the service entrance onwards. This is the work a second-class licence covers.',
    kana: 'おくないはいせん',
    romaji: 'okunai haisen',
    en: 'interior wiring',
    category: 'wiring-design',
  },
  {
    jp: '低圧',
    explain:
      'The lowest of the three voltage bands, up to 600 V AC. Everything a second-class electrician touches sits in this band.',
    kana: 'ていあつ',
    romaji: 'teiatsu',
    en: 'low voltage',
    note: 'AC ≤ 600 V, DC ≤ 750 V.',
    category: 'wiring-design',
  },
  {
    jp: '高圧',
    explain:
      'The middle voltage band, above 600 V and up to 7000 V AC. It needs a first-class licence, and it can injure at a distance rather than only on contact.',
    kana: 'こうあつ',
    romaji: 'kōatsu',
    en: 'high voltage',
    note: 'AC over 600 V up to 7000 V.',
    category: 'wiring-design',
  },

  /* --------------------------------------------------------- equipment */
  {
    jp: '三相誘導電動機',
    explain:
      'The workhorse motor of industry. Three-phase power creates a magnetic field that rotates inside it, dragging the rotor round; it has no brushes and almost nothing to wear out.',
    kana: 'さんそうゆうどうでんどうき',
    romaji: 'sansō yūdō dendōki',
    en: 'three-phase induction motor',
    category: 'equipment',
  },
  {
    jp: '同期速度',
    explain:
      'The speed at which the magnetic field inside a motor rotates. Set only by the supply frequency and the number of poles, so it is fixed by design, not by the load.',
    kana: 'どうきそくど',
    romaji: 'dōki sokudo',
    en: 'synchronous speed',
    note: 'Ns = 120f / p [min⁻¹].',
    category: 'equipment',
  },
  {
    jp: 'すべり',
    explain:
      'The small shortfall between the rotating field and the rotor that actually follows it. A rotor that kept up exactly would produce no turning force at all, so some slip is essential.',
    kana: 'すべり',
    romaji: 'suberi',
    en: 'slip',
    note: 's = (Ns − N) / Ns.',
    category: 'equipment',
  },
  {
    jp: 'スターデルタ始動',
    explain:
      'A trick for starting a big motor gently: begin with the windings in star, then switch to delta once it is spinning. Cuts the startup surge to a third, so it does not dim the lights.',
    kana: 'スターデルタしどう',
    romaji: 'sutā deruta shidō',
    en: 'star-delta starting',
    note: 'Starting current and torque both drop to 1/3.',
    category: 'equipment',
  },
  {
    jp: '進相コンデンサ',
    explain:
      'A capacitor wired alongside a motor to cancel the wasted current the motor draws. Fitting one lowers the cable current for the same useful work.',
    kana: 'しんそうコンデンサ',
    romaji: 'shinsō kondensa',
    en: 'power-factor correction capacitor',
    note: 'Connected in parallel with the motor.',
    category: 'equipment',
  },
  {
    jp: '白熱電球',
    explain:
      'The old-fashioned bulb with a glowing wire inside. Cheap, warm light, but most of the energy leaves as heat and it dies within about a thousand hours.',
    kana: 'はくねつでんきゅう',
    romaji: 'hakunetsu denkyū',
    en: 'incandescent lamp',
    category: 'equipment',
  },
  {
    jp: '蛍光灯',
    explain:
      'A tube coated inside with phosphor that glows when an electric discharge passes through the gas. Far more efficient than a filament bulb but needs extra gear to start and run.',
    kana: 'けいこうとう',
    romaji: 'keikōtō',
    en: 'fluorescent lamp',
    category: 'equipment',
  },
  {
    jp: '安定器',
    explain:
      'The heavy coil or electronic unit inside a fluorescent fitting. Once the tube strikes, its resistance collapses, so the ballast is there to hold the current back before it destroys itself.',
    kana: 'あんていき',
    romaji: 'anteiki',
    en: 'ballast',
    note: 'Limits the fluorescent lamp current.',
    category: 'equipment',
  },
  {
    jp: '点灯管',
    explain:
      'The small can in older fluorescent fittings that flickers a few times at switch-on. It gives the tube the kick it needs to strike and then steps out of the way.',
    kana: 'てんとうかん',
    romaji: 'tentōkan',
    en: 'glow starter',
    category: 'equipment',
  },
  {
    jp: '発光ダイオード',
    explain:
      'A semiconductor that emits light directly when current passes through it. It beats every other lamp on efficiency and life, and runs cool.',
    kana: 'はっこうダイオード',
    romaji: 'hakkō daiōdo',
    en: 'LED',
    note: 'Highest efficacy, longest life of the lamps on the exam.',
    category: 'equipment',
  },
  {
    jp: '単極スイッチ',
    explain:
      'The ordinary one-way light switch, breaking a single wire. It must be wired into the live side so the lamp holder is dead when the switch is off.',
    kana: 'たんきょくスイッチ',
    romaji: 'tankyoku suitchi',
    en: 'single-pole switch',
    note: 'Also 片切スイッチ. Symbol ●.',
    category: 'equipment',
  },
  {
    jp: '3路スイッチ',
    explain:
      'A switch with three terminals that routes the current down one of two paths rather than simply cutting it. Two of them let you control one light from either end of a staircase or corridor.',
    kana: 'さんろスイッチ',
    romaji: 'sanro suitchi',
    en: '3-way switch',
    note: 'Two of them control one light. Symbol ●₃.',
    category: 'equipment',
  },
  {
    jp: '4路スイッチ',
    explain:
      'A crossover switch that swaps two wires over. Slotted between a pair of three-way switches, it adds a third place from which to control the same light.',
    kana: 'よんろスイッチ',
    romaji: 'yonro suitchi',
    en: '4-way switch',
    note: 'Goes between two 3-way switches. Symbol ●₄.',
    category: 'equipment',
  },
  {
    jp: '位置表示灯内蔵スイッチ',
    explain:
      'A switch with a small lamp that glows while it is OFF, so you can find it in a dark room. Nicknamed a firefly switch.',
    kana: 'いちひょうじとうないぞうスイッチ',
    romaji: 'ichi hyōji-tō naizō suitchi',
    en: 'locator (“firefly”) switch',
    note: 'Lamp glows when the switch is OFF. Symbol ●_H.',
    category: 'equipment',
  },
  {
    jp: '確認表示灯内蔵スイッチ',
    explain:
      'A switch with a small lamp that glows while the load is ON, so you know something you cannot see — an extractor fan, an outside light — is still running.',
    kana: 'かくにんひょうじとうないぞうスイッチ',
    romaji: 'kakunin hyōji-tō naizō suitchi',
    en: 'pilot switch',
    note: 'Lamp glows when the load is ON. Symbol ●_L.',
    category: 'equipment',
  },
  {
    jp: '自動点滅器',
    explain:
      'A light-sensing switch that turns outdoor lighting on at dusk and off at dawn by itself. On the practical exam it is represented by a terminal block.',
    kana: 'じどうてんめつき',
    romaji: 'jidō tenmetsuki',
    en: 'photoelectric (dusk-to-dawn) switch',
    note: 'Symbol ●_A. Wired with 1-2-3 terminals in the practical exam.',
    category: 'equipment',
  },
  {
    jp: 'タイムスイッチ',
    explain:
      'A clock-driven switch that turns a load on and off at set times, such as shop signage or corridor lighting.',
    kana: 'タイムスイッチ',
    romaji: 'taimu suitchi',
    en: 'time switch',
    note: 'Symbol TS.',
    category: 'equipment',
  },
  {
    jp: 'リモコンリレー',
    explain:
      'A remotely operated switch: a low-voltage button energises a coil, and the coil throws the heavy contacts. It lets a tiny switch control a big circuit from far away.',
    kana: 'リモコンリレー',
    romaji: 'rimokon riree',
    en: 'remote-control relay',
    note: 'Symbol ▲. Low-voltage control side.',
    category: 'equipment',
  },
  {
    jp: '調光器',
    explain:
      'A dimmer — it varies how much power reaches a lamp so the light can be turned down. Not every lamp tolerates one.',
    kana: 'ちょうこうき',
    romaji: 'chōkōki',
    en: 'dimmer',
    category: 'equipment',
  },
  {
    jp: 'コンセント',
    explain:
      'A socket outlet in the wall. Beware the word: konsento is Japanese-made English and has nothing to do with consent.',
    kana: 'コンセント',
    romaji: 'konsento',
    en: 'receptacle / socket outlet',
    note: 'Japanese-English: NOT “consent”.',
    category: 'equipment',
  },
  {
    jp: '接地極付コンセント',
    explain:
      'A socket with a third pin connecting the appliance case to earth. Required where water is about — washing machines, air conditioners — so a fault cannot put the metal case live.',
    kana: 'せっちきょくつきコンセント',
    romaji: 'setchikyoku-tsuki konsento',
    en: 'outlet with earthing pole',
    note: 'Marked E on the drawing.',
    category: 'equipment',
  },
  {
    jp: '接地端子付コンセント',
    explain:
      'A socket with a separate little screw terminal for an earth wire, for appliances whose earth lead is a separate green wire rather than a third pin.',
    kana: 'せっちたんしつきコンセント',
    romaji: 'setchitanshi-tsuki konsento',
    en: 'outlet with earthing terminal',
    note: 'Marked ET.',
    category: 'equipment',
  },
  {
    jp: '抜け止め形',
    explain:
      'A socket where you push the plug in and twist it to lock. Stops the plug being pulled out by accident, so it is used for fridges and other things that must not be unplugged.',
    kana: 'ぬけどめがた',
    romaji: 'nukedome-gata',
    en: 'pull-out-proof type',
    note: 'Marked LK.',
    category: 'equipment',
  },
  {
    jp: '引掛形',
    explain:
      'A socket and plug with curved blades that twist to lock, gripping far harder than an ordinary plug. Common on ceilings and for temporary supplies.',
    kana: 'ひっかけがた',
    romaji: 'hikkake-gata',
    en: 'twist-lock type',
    note: 'Marked T.',
    category: 'equipment',
  },
  {
    jp: '防雨形',
    explain:
      'A fitting built with a cover and seals to keep rain out. Needed anywhere outdoors, even under an eave.',
    kana: 'ぼううがた',
    romaji: 'bōu-gata',
    en: 'rainproof type',
    note: 'Marked WP.',
    category: 'equipment',
  },
  {
    jp: '埋込連用取付枠',
    explain:
      'The metal frame that holds one, two or three flush devices in a wall box behind the cover plate. A single device has to sit in the middle of it — put it at the top and the practical exam fails you.',
    kana: 'うめこみれんようとりつけわく',
    romaji: 'umekomi ren’yō toritsukewaku',
    en: 'flush-mount device frame',
    note: 'Holds 1–3 devices; a single device must sit in the centre.',
    category: 'equipment',
  },
  {
    jp: '引掛シーリング',
    explain:
      'The ceiling connector a light fitting twists onto, so a lamp can be changed without tools or wiring. Fitting them is a staple of the practical exam.',
    kana: 'ひっかけシーリング',
    romaji: 'hikkake shīringu',
    en: 'ceiling rose (quick-connect)',
    note: 'Round 丸形 and square 角形 versions appear in the practical exam.',
    category: 'equipment',
  },
  {
    jp: 'ランプレセプタクル',
    explain:
      'A plain lamp holder screwed straight to the ceiling or wall. In the practical exam it is the piece that demands a neat clockwise loop under each terminal screw.',
    kana: 'ランプレセプタクル',
    romaji: 'ranpu reseputakuru',
    en: 'lamp receptacle',
    note: 'Needs a clockwise 輪作り loop under each screw.',
    category: 'equipment',
  },
  {
    jp: '露出形コンセント',
    explain:
      'A socket mounted on the surface of the wall in its own body, rather than sunk into it. Used on concrete and in workshops where you cannot sink a box.',
    kana: 'ろしゅつがたコンセント',
    romaji: 'roshutsu-gata konsento',
    en: 'surface-mounted outlet',
    category: 'equipment',
  },
  {
    jp: 'アウトレットボックス',
    explain:
      'A steel box, usually octagonal, that conduits run into and where cables are joined. Its blanked-off holes are punched out as needed.',
    kana: 'アウトレットボックス',
    romaji: 'autoretto bokkusu',
    en: 'outlet box (steel junction box)',
    category: 'equipment',
  },
  {
    jp: 'ジョイントボックス',
    explain:
      'Any box whose job is to house a joint between cables. The rule is absolute: joins live inside a box that can be opened and inspected, never buried in a wall.',
    kana: 'ジョイントボックス',
    romaji: 'jointo bokkusu',
    en: 'junction box',
    note: 'All joints must be inside a box.',
    category: 'equipment',
  },
  {
    jp: '電線管',
    explain:
      'The pipe that wires are pulled through. It protects them from damage, keeps them out of contact with the building, and lets them be replaced later.',
    kana: 'でんせんかん',
    romaji: 'densenkan',
    en: 'conduit',
    category: 'equipment',
  },
  {
    jp: 'ねじなし電線管',
    explain:
      'Steel conduit with no thread on the ends; fittings clamp on with set screws instead. The screw heads are designed to snap off when tight enough, which proves the joint is sound.',
    kana: 'ねじなしでんせんかん',
    romaji: 'nejinashi densenkan',
    en: 'threadless steel conduit (E)',
    note: 'E19, E25… Its set screw head must snap off.',
    category: 'equipment',
  },
  {
    jp: '薄鋼電線管',
    explain:
      'Thin-walled steel conduit, threaded, for ordinary indoor use. Its sizes are the odd numbers — C19, C25, C31.',
    kana: 'うすこうでんせんかん',
    romaji: 'usukō densenkan',
    en: 'thin-wall steel conduit (C)',
    note: 'Odd-numbered sizes C19, C25.',
    category: 'equipment',
  },
  {
    jp: '厚鋼電線管',
    explain:
      'Heavy-walled steel conduit for buried and exposed outdoor runs where it may take a knock. Its sizes are the even numbers — G16, G22, G28.',
    kana: 'あつこうでんせんかん',
    romaji: 'atsukō densenkan',
    en: 'thick-wall steel conduit (G)',
    note: 'Even-numbered sizes G16, G22.',
    category: 'equipment',
  },
  {
    jp: '合成樹脂製可とう電線管',
    explain:
      'Corrugated plastic conduit that bends by hand, so it snakes through a stud wall without fittings at every turn.',
    kana: 'ごうせいじゅしせいかとうでんせんかん',
    romaji: 'gōsei jushi-sei katō densenkan',
    en: 'flexible plastic conduit (PF / CD)',
    category: 'equipment',
  },
  {
    jp: 'PF管',
    explain:
      'The flexible plastic conduit that stops burning once the flame is removed. That is why it may be used on the surface as well as buried in concrete.',
    kana: 'ピーエフかん',
    romaji: 'pī-efu kan',
    en: 'PF conduit',
    note: 'Self-extinguishing; may be exposed or buried in concrete.',
    category: 'equipment',
  },
  {
    jp: 'CD管',
    explain:
      'Orange flexible conduit that keeps burning once alight. Because of that it is only ever allowed buried in concrete, never run where you can see it — a favourite exam question.',
    kana: 'シーディーかん',
    romaji: 'shī-dī kan',
    en: 'CD conduit',
    note: 'Orange, NOT self-extinguishing: concrete burial only.',
    category: 'equipment',
  },
  {
    jp: '硬質ポリ塩化ビニル管',
    explain:
      'Rigid grey plastic pipe for wiring. It does not rust, so it suits damp and corrosive places, and lengths are glued into sockets.',
    kana: 'こうしつポリえんかビニルかん',
    romaji: 'kōshitsu pori-enka-biniru kan',
    en: 'rigid PVC conduit (VE)',
    category: 'equipment',
  },
  {
    jp: '2種金属製可とう電線管',
    explain:
      'A bendy metal hose for the last stretch to something that vibrates or moves, such as a motor, where rigid conduit would crack.',
    kana: 'にしゅきんぞくせいかとうでんせんかん',
    romaji: 'nishu kinzoku-sei katō densenkan',
    en: 'type-2 flexible metal conduit (Plica tube)',
    category: 'equipment',
  },
  {
    jp: '金属線ぴ',
    explain:
      'A shallow metal channel with a clip-on lid, screwed along a wall surface where chasing into the plaster is not possible. Dry places only.',
    kana: 'きんぞくせんぴ',
    romaji: 'kinzoku senpi',
    en: 'metal surface raceway (moulding)',
    category: 'equipment',
  },
  {
    jp: 'ライティングダクト',
    explain:
      'The track in a ceiling that spotlights clip into and slide along. The slot must face downward and the ends must be closed off.',
    kana: 'ライティングダクト',
    romaji: 'raitingu dakuto',
    en: 'lighting track / duct',
    note: 'Openings must face downward; ends closed.',
    category: 'equipment',
  },
  {
    jp: 'VVFケーブル',
    explain:
      'The flat grey cable used for virtually all Japanese house wiring: two or three insulated cores inside one outer sheath. Almost every practical exam task is built from it.',
    kana: 'ブイブイエフケーブル',
    romaji: 'bui-bui-efu kēburu',
    en: 'flat PVC-sheathed cable',
    note: '600 V ビニル絶縁ビニルシースケーブル平形. The house wiring cable.',
    category: 'equipment',
  },
  {
    jp: 'VVRケーブル',
    explain:
      'The same construction as VVF but round instead of flat. Stripping the round sheath cleanly without nicking the cores takes more care with the knife.',
    kana: 'ブイブイアールケーブル',
    romaji: 'bui-bui-āru kēburu',
    en: 'round PVC-sheathed cable',
    category: 'equipment',
  },
  {
    jp: 'EM-EEFケーブル',
    explain:
      'The environmentally friendly cable. Its insulation contains no chlorine, so in a fire it gives off far less corrosive, poisonous smoke.',
    kana: 'イーエムイーイーエフケーブル',
    romaji: 'ī-emu ī-ī-efu kēburu',
    en: 'eco (halogen-free) flat cable',
    note: 'Polyethylene insulation, green-ish sheath.',
    category: 'equipment',
  },
  {
    jp: 'IV線',
    explain:
      'A single insulated wire with no outer sheath. It is not used on its own — it is pulled through conduit, which provides the mechanical protection.',
    kana: 'アイブイせん',
    romaji: 'ai-bui sen',
    en: '600 V PVC-insulated wire',
    note: 'Single insulated conductor, used inside conduit.',
    category: 'equipment',
  },
  {
    jp: 'CVケーブル',
    explain:
      'Cable insulated with cross-linked polyethylene, which tolerates more heat than PVC. That lets a given size carry more current.',
    kana: 'シーブイケーブル',
    romaji: 'shī-bui kēburu',
    en: 'XLPE-insulated PVC-sheathed cable',
    category: 'equipment',
  },
  {
    jp: 'キャブタイヤケーブル',
    explain:
      'Tough, very flexible cable with a thick rubber sheath, for things that get dragged about — portable tools, temporary site supplies.',
    kana: 'キャブタイヤケーブル',
    romaji: 'kyabutaiya kēburu',
    en: 'heavy-duty flexible cable',
    note: 'For portable equipment.',
    category: 'equipment',
  },
  {
    jp: 'ゴムブッシング',
    explain:
      'A rubber ring pushed into the hole where a cable enters a steel box. The bare punched edge is sharp enough to cut the sheath, and this stops it.',
    kana: 'ゴムブッシング',
    romaji: 'gomu busshingu',
    en: 'rubber bushing',
    note: 'Protects cable at the knockout hole of a box.',
    category: 'equipment',
  },
  {
    jp: 'ロックナット',
    explain: 'The toothed nut that locks a conduit fitting tight to a steel box from the inside.',
    kana: 'ロックナット',
    romaji: 'rokku natto',
    en: 'lock nut',
    category: 'equipment',
  },
  {
    jp: 'サドル',
    explain:
      'The small clip that screws to the wall to hold a conduit or cable in place. How far apart they go is set by the regulations.',
    kana: 'サドル',
    romaji: 'sadoru',
    en: 'saddle (conduit clip)',
    category: 'equipment',
  },
  {
    jp: 'ステープル',
    explain: 'The insulated staple hammered over a flat cable to fix it to a timber stud.',
    kana: 'ステープル',
    romaji: 'sutēpuru',
    en: 'cable staple',
    category: 'equipment',
  },
  {
    jp: 'リングスリーブ',
    explain:
      'A soft metal ring slipped over bared conductor ends and crushed with a special tool, welding them into one solid joint. This is the standard way of joining cables in a box.',
    kana: 'リングスリーブ',
    romaji: 'ringu surību',
    en: 'ring sleeve (crimp connector)',
    note: 'Sizes 小 / 中 / 大, crimp marks ○ 小 中 大.',
    category: 'equipment',
  },
  {
    jp: '渡り線',
    kana: 'わたりせん',
    romaji: 'watarisen',
    en: 'jumper wire',
    explain:
      'A short link between two devices sharing one mounting frame, or between the terminals of one device, so that the live or the earthed side does not need its own cable back to the box. The pair of wires running between two three-way switches are also called travellers.',
    note: 'The installation conditions state which colour each jumper must be.',
    category: 'equipment',
  },
  {
    jp: '差込形コネクタ',
    explain:
      'A plastic connector with spring jaws: push the stripped wire in and it grips. Much faster than crimping, and it is what the exam conditions often specify.',
    kana: 'さしこみがたコネクタ',
    romaji: 'sashikomi-gata konekuta',
    en: 'push-in wire connector',
    category: 'equipment',
  },
  {
    jp: '端子台',
    explain:
      'A strip of screw terminals in a plastic block. In the practical exam it stands in for things too big or expensive to supply, such as a motor or a time switch.',
    kana: 'たんしだい',
    romaji: 'tanshidai',
    en: 'terminal block',
    note: 'Stands in for a breaker, relay or motor in the practical exam.',
    category: 'equipment',
  },
  {
    jp: 'ペンチ',
    explain:
      'The pliers an electrician reaches for most: they cut cable, grip and twist conductors together, and bend wire to shape. Three jobs in one tool, which is why it heads the required list.',
    kana: 'ペンチ',
    romaji: 'penchi',
    en: 'combination pliers',
    category: 'equipment',
  },
  {
    jp: '電工ナイフ',
    explain:
      'A stubby fixed-blade knife for slitting cable sheath. Used with a light touch: nick a core and the practical exam fails you.',
    kana: 'でんこうナイフ',
    romaji: 'denkō naifu',
    en: 'electrician’s knife',
    category: 'equipment',
  },
  {
    jp: 'ワイヤストリッパ',
    explain:
      'A plier-like tool with sized notches that cuts the insulation without biting into the copper. The dedicated flat-cable version is the biggest single time saver in the practical exam.',
    kana: 'ワイヤストリッパ',
    romaji: 'waiya sutorippa',
    en: 'wire stripper',
    category: 'equipment',
  },
  {
    jp: 'リングスリーブ用圧着工具',
    explain:
      'A heavy ratcheting tool that crushes ring sleeves with the right force, stamping the die mark as it goes. Yellow handles mark it out from the red-handled tool for bare terminals.',
    kana: 'リングスリーブようあっちゃくこうぐ',
    romaji: 'ringu surību-yō atchaku kōgu',
    en: 'ring-sleeve crimping tool',
    note: 'Yellow handles (JIS C 9711).',
    category: 'equipment',
  },
  {
    jp: 'ウォータポンププライヤ',
    explain:
      'Large adjustable-jaw pliers for gripping and tightening conduit fittings and lock nuts.',
    kana: 'ウォータポンププライヤ',
    romaji: 'wōta ponpu puraiya',
    en: 'water-pump pliers',
    category: 'equipment',
  },
  {
    jp: 'パイプベンダ',
    explain:
      'A lever tool that bends steel conduit to a smooth curve without kinking or flattening it.',
    kana: 'パイプベンダ',
    romaji: 'paipu benda',
    en: 'conduit bender',
    category: 'equipment',
  },
  {
    jp: '金切りのこ',
    explain: 'A fine-toothed saw in a frame for cutting conduit and metal trunking.',
    kana: 'かなきりのこ',
    romaji: 'kanakiri noko',
    en: 'hacksaw',
    category: 'equipment',
  },
  {
    jp: 'リーマ',
    explain:
      'A cone-shaped cutter that shaves the burr off the inside of a freshly cut conduit, so the sharp lip cannot strip the insulation off wires pulled through later.',
    kana: 'リーマ',
    romaji: 'rīma',
    en: 'reamer',
    note: 'Deburrs the cut end of a conduit.',
    category: 'equipment',
  },
  {
    jp: 'クリックボール',
    explain:
      'A hand-cranked brace that turns a reamer or a wood bit where there is no power available.',
    kana: 'クリックボール',
    romaji: 'kurikku bōru',
    en: 'hand brace',
    note: 'Turns a reamer or a wood bit.',
    category: 'equipment',
  },
  {
    jp: '羽根ぎり',
    explain:
      'A flat wood-boring bit for drilling through timber studs and joists so cable can pass.',
    kana: 'はねぎり',
    romaji: 'hanegiri',
    en: 'spade / auger bit',
    note: 'Drills wooden studs for cables.',
    category: 'equipment',
  },
  {
    jp: 'ホルソ',
    explain: 'A cylindrical saw that cuts a clean round hole in sheet metal or a plastic box.',
    kana: 'ホルソ',
    romaji: 'horuso',
    en: 'hole saw',
    category: 'equipment',
  },
  {
    jp: 'ノックアウトパンチャ',
    explain:
      'A tool that punches a neat round hole through the steel wall of a box or panel by hydraulic or screw force, where a drill would tear the metal.',
    kana: 'ノックアウトパンチャ',
    romaji: 'nokkuauto pancha',
    en: 'knockout punch',
    note: 'Makes holes in a steel box or panel.',
    category: 'equipment',
  },
  {
    jp: '呼び線挿入器',
    explain:
      'A springy steel or fibreglass tape pushed through an installed conduit. You tie the cables to the end and pull them back through.',
    kana: 'よびせんそうにゅうき',
    romaji: 'yobisen sōnyūki',
    en: 'fish tape',
    note: 'Also called スチールワイヤ / 通線器.',
    category: 'equipment',
  },
  {
    jp: '張線器',
    explain: 'A ratchet puller that tensions an overhead span so the wire does not sag.',
    kana: 'ちょうせんき',
    romaji: 'chōsenki',
    en: 'wire tightener (come-along)',
    note: 'Nickname シメラ.',
    category: 'equipment',
  },

  /* ------------------------------------------------------ installation */
  {
    jp: '施工',
    explain:
      'Doing the physical work on site — running the cable, fixing the boxes, making it all comply. As opposed to designing it.',
    kana: 'せこう',
    romaji: 'sekō',
    en: 'installation work / execution',
    category: 'installation',
  },
  {
    jp: '隠ぺい配線',
    explain:
      'Wiring hidden inside the building fabric, above a ceiling or under a floor. Most house wiring is like this, which is why it must be right first time.',
    kana: 'いんぺいはいせん',
    romaji: 'inpei haisen',
    en: 'concealed wiring',
    note: '天井隠ぺい = solid line; 床隠ぺい = dashed line.',
    category: 'installation',
  },
  {
    jp: '露出配線',
    explain:
      'Wiring run on the surface where you can see it. Easy to inspect and alter, so it is common in workshops and on concrete.',
    kana: 'ろしゅつはいせん',
    romaji: 'roshutsu haisen',
    en: 'exposed (surface) wiring',
    note: 'Dotted line on the drawing.',
    category: 'installation',
  },
  {
    jp: '造営材',
    explain:
      'Any structural part of the building — a stud, a joist, a beam, a wall. The regulations constantly refer to fixing things to it and how far apart the fixings go.',
    kana: 'ぞうえいざい',
    romaji: 'zōeizai',
    en: 'building member (stud, joist, wall)',
    category: 'installation',
  },
  {
    jp: '支持点間距離',
    explain:
      'How far apart the clips holding a cable or conduit may be. Too far and it sags, chafes and eventually breaks, so there is a maximum for each method.',
    kana: 'しじてんかんきょり',
    romaji: 'shijiten-kan kyori',
    en: 'distance between supports',
    note: 'Cable on a building member: ≤ 2 m.',
    category: 'installation',
  },
  {
    jp: '接地工事',
    explain:
      'Deliberately connecting metal that should never be live — appliance cases, conduit, boxes — to the earth. If a fault makes that metal live, the current runs to earth and trips the breaker instead of running through whoever touches it.',
    kana: 'せっちこうじ',
    romaji: 'setchi kōji',
    en: 'earthing (grounding) work',
    note: 'Classes A / B / C / D.',
    category: 'installation',
  },
  {
    jp: 'D種接地工事',
    explain:
      'The class of earthing used for ordinary low-voltage equipment, 300 V and below. It is the one a second-class electrician does almost every day.',
    kana: 'ディーしゅせっちこうじ',
    romaji: 'dī-shu setchi kōji',
    en: 'class-D earthing',
    note: '≤ 100 Ω (≤ 500 Ω if an RCD trips within 0.5 s). For ≤ 300 V equipment.',
    category: 'installation',
  },
  {
    jp: '接地抵抗',
    explain:
      'How readily the earth connection lets fault current escape into the ground. A lower number is better; it is measured with a special tester at handover.',
    kana: 'せっちていこう',
    romaji: 'setchi teikō',
    en: 'earth resistance',
    category: 'installation',
  },
  {
    jp: '接地線',
    explain:
      'The wire running from the metalwork to the earth electrode. Coloured green, and never carries current except during a fault.',
    kana: 'せっちせん',
    romaji: 'setchisen',
    en: 'earthing conductor',
    note: 'Green. Class D minimum 1.6 mm.',
    category: 'installation',
  },
  {
    jp: 'ボンド線',
    explain:
      'A short link that bridges across a joint in metal conduit or trunking. Without it a painted or loose fitting can break the earth path exactly when a fault needs it.',
    kana: 'ボンドせん',
    romaji: 'bondo sen',
    en: 'bonding jumper',
    note: 'Keeps metal conduit and box electrically continuous.',
    category: 'installation',
  },
  {
    jp: '金属管工事',
    explain:
      'Wiring pulled through steel pipe. The toughest method and permitted anywhere, but the metal itself has to be earthed.',
    kana: 'きんぞくかんこうじ',
    romaji: 'kinzokukan kōji',
    en: 'metal conduit wiring',
    note: 'Allowed in every location.',
    category: 'installation',
  },
  {
    jp: 'ケーブル工事',
    explain:
      'Wiring run as sheathed cable clipped directly to the building, with no pipe. The quickest method and, like steel conduit, allowed in every location.',
    kana: 'ケーブルこうじ',
    romaji: 'kēburu kōji',
    en: 'cable wiring',
    note: 'Also allowed in every location.',
    category: 'installation',
  },
  {
    jp: 'がいし引き工事',
    explain:
      'The old method of running bare or lightly insulated wire on porcelain insulators standing clear of the woodwork. Still in the syllabus, rarely installed now.',
    kana: 'がいしびきこうじ',
    romaji: 'gaishibiki kōji',
    en: 'knob-and-tube (insulator) wiring',
    category: 'installation',
  },
  {
    jp: '湿気の多い場所',
    explain:
      'Somewhere regularly damp but not actually wet — a basement, an unventilated store. Some wiring methods are barred here.',
    kana: 'しっけのおおいばしょ',
    romaji: 'shikke no ōi basho',
    en: 'damp location',
    category: 'installation',
  },
  {
    jp: '水気のある場所',
    explain:
      'Somewhere water is actually present: a bathroom, a kitchen floor, outdoors. Earthing may never be omitted here, whatever other exemptions apply.',
    kana: 'みずけのあるばしょ',
    romaji: 'mizuke no aru basho',
    en: 'wet location',
    note: 'Class-D earthing may NOT be omitted here.',
    category: 'installation',
  },
  {
    jp: '点検できる場所',
    explain:
      'Somewhere a person can get to afterwards to look at the work — a loft with a hatch, above a removable ceiling. Several methods are only allowed if this is true.',
    kana: 'てんけんできるばしょ',
    romaji: 'tenken dekiru basho',
    en: 'accessible location',
    category: 'installation',
  },
  {
    jp: '電線の接続',
    explain:
      'Joining two conductors. It has four legal conditions, because a bad joint is a high-resistance hot spot and the commonest cause of electrical fires.',
    kana: 'でんせんのせつぞく',
    romaji: 'densen no setsuzoku',
    en: 'conductor joints',
    note: 'Must not increase resistance or reduce tensile strength by more than 20 %.',
    category: 'installation',
  },
  {
    jp: '絶縁被覆',
    explain:
      'The coloured plastic layer directly on each conductor, which is what actually stops the current escaping. Damage it and the cable is no longer safe, even if it still works.',
    kana: 'ぜつえんひふく',
    romaji: 'zetsuen hifuku',
    en: 'insulation covering',
    category: 'installation',
  },
  {
    jp: '心線',
    explain:
      'The bare metal conductor inside, once the insulation is off. How much of it may show at a terminal is measured in millimetres by the practical examiners.',
    kana: 'しんせん',
    romaji: 'shinsen',
    en: 'conductor core',
    category: 'installation',
  },
  {
    jp: '外装',
    explain:
      'The tough outer jacket wrapped around all the cores together. It takes the mechanical abuse; the coloured insulation beneath does the electrical job.',
    kana: 'がいそう',
    romaji: 'gaisō',
    en: 'outer sheath',
    category: 'installation',
  },
  {
    jp: '曲げ半径',
    explain:
      'How tight a bend a cable or conduit may be given. Bend it sharper and you crush the insulation or tear the conductors when pulling them in.',
    kana: 'まげはんけい',
    romaji: 'mage hankei',
    en: 'bending radius',
    note: 'Conduit: inside radius ≥ 6 × inside diameter.',
    category: 'installation',
  },
  {
    jp: '小勢力回路',
    explain:
      'A very low voltage circuit — a doorbell, an intercom — fed through a transformer at 60 V or less. Because it cannot hurt anyone, it may be wired without a licence.',
    kana: 'こせいりょくかいろ',
    romaji: 'koseiryoku kairo',
    en: 'low-power circuit',
    note: '≤ 60 V bell / intercom circuits — no licence needed.',
    category: 'installation',
  },
  {
    jp: '引込口配線',
    explain:
      'The stretch of wiring from where the supply enters the building to the meter and main switch.',
    kana: 'ひきこみぐちはいせん',
    romaji: 'hikikomiguchi haisen',
    en: 'service entrance wiring',
    category: 'installation',
  },

  /* -------------------------------------------------------- inspection */
  {
    jp: '竣工検査',
    explain:
      'The set of tests done when the job is finished, before anyone is allowed to use it. The order is fixed: look first, measure with the power off, then energise.',
    kana: 'しゅんこうけんさ',
    romaji: 'shunkō kensa',
    en: 'completion (commissioning) inspection',
    category: 'inspection',
  },
  {
    jp: '目視点検',
    explain:
      'Simply looking at everything: right materials, right sizes, tight terminals, covers on. Always the first step, and it finds most faults before any instrument is touched.',
    kana: 'もくしてんけん',
    romaji: 'mokushi tenken',
    en: 'visual inspection',
    note: 'Always the first step.',
    category: 'inspection',
  },
  {
    jp: '絶縁抵抗',
    explain:
      'A measure of how well the insulation still separates the wires from each other and from earth. Measured in millions of ohms — a low reading means moisture or damage.',
    kana: 'ぜつえんていこう',
    romaji: 'zetsuen teikō',
    en: 'insulation resistance',
    note: '0.1 / 0.2 / 0.4 MΩ depending on voltage.',
    category: 'inspection',
  },
  {
    jp: '絶縁抵抗計',
    explain:
      'The tester that pushes a few hundred volts DC into a dead circuit to check the insulation is sound. Called a megger after the original brand.',
    kana: 'ぜつえんていこうけい',
    romaji: 'zetsuen teikōkei',
    en: 'insulation tester (megger)',
    note: 'Also メガー.',
    category: 'inspection',
  },
  {
    jp: '接地抵抗計',
    explain:
      'The instrument that measures how good an earth connection is, using three spikes driven into the ground in a line about ten metres apart.',
    kana: 'せっちていこうけい',
    romaji: 'setchi teikōkei',
    en: 'earth resistance tester',
    note: 'Also アーステスタ. Uses E-P-C probes 10 m apart.',
    category: 'inspection',
  },
  {
    jp: '回路計',
    explain:
      'The general-purpose multimeter: voltage, current, resistance and continuity in one handheld box.',
    kana: 'かいろけい',
    romaji: 'kairokei',
    en: 'multimeter (tester)',
    category: 'inspection',
  },
  {
    jp: 'クランプメータ',
    explain:
      'A meter whose jaws close around a cable to read the current from its magnetic field, with no need to disconnect anything. Clamp all the conductors together and what is left is the leakage.',
    kana: 'クランプメータ',
    romaji: 'kuranpu mēta',
    en: 'clamp meter',
    note: 'Measures current (and leakage) without breaking the circuit.',
    category: 'inspection',
  },
  {
    jp: '検電器',
    explain:
      'A pen-sized tester that tells you whether a conductor is live before you touch it. The one instrument you use every single day.',
    kana: 'けんでんき',
    romaji: 'kendenki',
    en: 'voltage detector',
    category: 'inspection',
  },
  {
    jp: '検相器',
    explain:
      'A tester that shows which order the three phases arrive in. Get it wrong and the motor runs backwards, which can wreck a pump or a machine.',
    kana: 'けんそうき',
    romaji: 'kensōki',
    en: 'phase-rotation tester',
    category: 'inspection',
  },
  {
    jp: '導通試験',
    explain:
      'Checking that a circuit really is joined end to end the way the drawing says, with no break and nothing crossed over.',
    kana: 'どうつうしけん',
    romaji: 'dōtsū shiken',
    en: 'continuity test',
    category: 'inspection',
  },
  {
    jp: '漏れ電流',
    explain:
      'Current escaping from where it should be, usually to earth through damp or damaged insulation. A small amount is normal; more than a milliamp means something is wrong.',
    kana: 'もれでんりゅう',
    romaji: 'more denryū',
    en: 'leakage current',
    note: 'Must stay ≤ 1 mA when insulation resistance cannot be measured.',
    category: 'inspection',
  },
  {
    jp: '定期点検',
    explain:
      'Routine re-inspection of an installation already in service, to catch deterioration before it becomes a fault.',
    kana: 'ていきてんけん',
    romaji: 'teiki tenken',
    en: 'periodic inspection',
    category: 'inspection',
  },

  /* ---------------------------------------------------------- diagrams */
  {
    jp: '配線図',
    explain:
      'The floor plan of the building with the electrical symbols on it, showing what goes where. It is the drawing you work from, and twenty of the fifty exam questions come from one.',
    kana: 'はいせんず',
    romaji: 'haisenzu',
    en: 'wiring (layout) diagram',
    category: 'diagrams',
  },
  {
    jp: '単線図',
    explain:
      'A drawing that shows one line for each cable run, no matter how many wires are inside. Compact and easy to read, but you cannot wire from it directly.',
    kana: 'たんせんず',
    romaji: 'tansenzu',
    en: 'single-line diagram',
    note: 'What the exam gives you.',
    category: 'diagrams',
  },
  {
    jp: '複線図',
    explain:
      'The drawing you make yourself, showing every individual conductor and every joint. Converting the single-line plan into this is the core skill of the trade and of the practical exam.',
    kana: 'ふくせんず',
    romaji: 'fukusenzu',
    en: 'complete (two-line) wiring diagram',
    note: 'What you must draw to wire the job.',
    category: 'diagrams',
  },
  {
    jp: '接地側電線',
    explain:
      'The wire connected back to earth at the transformer — safe to touch relative to earth, though never treat it as safe. It is always white, and it goes to lamps and to the marked terminal of every socket.',
    kana: 'せっちがわでんせん',
    romaji: 'setchigawa densen',
    en: 'grounded (neutral) conductor',
    note: 'White. Goes to lamps and to the W terminal of outlets.',
    category: 'diagrams',
  },
  {
    jp: '非接地側電線',
    explain:
      'The live wire, the dangerous one, sitting at 100 V with respect to earth. Always black, and it goes to switches, never straight to a lamp.',
    kana: 'ひせっちがわでんせん',
    romaji: 'hisetchigawa densen',
    en: 'ungrounded (live) conductor',
    note: 'Black. Goes to switches and to the other side of outlets.',
    category: 'diagrams',
  },
  {
    jp: '最少電線本数',
    explain:
      'How many conductors a particular run actually needs. A classic exam question: you draw the full wiring diagram and count.',
    kana: 'さいしょうでんせんほんすう',
    romaji: 'saishō densen honsu',
    en: 'minimum number of conductors',
    note: 'Classic 配線図 question.',
    category: 'diagrams',
  },
  {
    jp: '極性',
    explain:
      'Which wire goes to which terminal. Sockets and lamp holders have a defined live and earthed side, and swapping them leaves metal live when the switch is off.',
    kana: 'きょくせい',
    romaji: 'kyokusei',
    en: 'polarity',
    category: 'diagrams',
  },
  {
    jp: '立上り',
    explain:
      'Wiring that leaves this floor going upward, continuing on the drawing for the floor above.',
    kana: 'たちあがり',
    romaji: 'tachiagari',
    en: 'riser (wiring going up)',
    category: 'diagrams',
  },
  {
    jp: '引下げ',
    explain: 'Wiring that arrives from the floor above, coming down into this one.',
    kana: 'ひきさげ',
    romaji: 'hikisage',
    en: 'drop (wiring coming down)',
    category: 'diagrams',
  },
  {
    jp: '素通し',
    explain:
      'Wiring that merely passes through this floor on its way between two others, connecting to nothing here.',
    kana: 'すどおし',
    romaji: 'sudōshi',
    en: 'pass-through',
    category: 'diagrams',
  },

  /* --------------------------------------------------------------- law */
  {
    jp: '電気事業法',
    explain:
      'The top-level law covering electricity supply and safety. For you, its job is to sort every installation into categories, because the category decides which licence may work on it.',
    kana: 'でんきじぎょうほう',
    romaji: 'denki jigyō hō',
    en: 'Electricity Business Act',
    note: 'Defines 電気工作物 categories.',
    category: 'law',
  },
  {
    jp: '電気工事士法',
    explain:
      'The law that says who is allowed to do electrical work, what each licence covers, and what duties come with holding one.',
    kana: 'でんきこうじしほう',
    romaji: 'denki kōjishi hō',
    en: 'Electricians Act',
    note: 'Who may do which work, and their duties.',
    category: 'law',
  },
  {
    jp: '電気用品安全法',
    explain:
      'The law requiring electrical products sold in Japan to be tested and marked. As an electrician you may only install materials carrying the right mark.',
    kana: 'でんきようひんあんぜんほう',
    romaji: 'denki yōhin anzen hō',
    en: 'Electrical Appliance and Material Safety Act',
    note: 'PSE marks.',
    category: 'law',
  },
  {
    jp: '一般用電気工作物',
    explain:
      'An installation taking its supply at 600 V or less and staying within its own premises — houses, small shops, small offices. Precisely the scope of the second-class licence.',
    kana: 'いっぱんようでんきこうさくぶつ',
    romaji: 'ippan-yō denki kōsakubutsu',
    en: 'general (domestic) electrical installation',
    note: 'Supplied at ≤ 600 V. The scope of the 2nd-class licence.',
    category: 'law',
  },
  {
    jp: '自家用電気工作物',
    explain:
      'A larger installation with its own high-voltage intake and transformer, such as a factory or a hospital. It needs a first-class licence, or a separate certificate for its low-voltage parts.',
    kana: 'じかようでんきこうさくぶつ',
    romaji: 'jikayō denki kōsakubutsu',
    en: 'privately-owned (HV) installation',
    note: 'Needs a 1st-class licence or 認定 certificate.',
    category: 'law',
  },
  {
    jp: '特定電気用品',
    explain:
      'The stricter of the two product-safety categories, for things that carry fault current or get handled — cable, breakers, sockets, plugs. Marked with a diamond-shaped PSE symbol.',
    kana: 'とくていでんきようひん',
    romaji: 'tokutei denki yōhin',
    en: 'specified electrical appliance',
    note: 'Diamond ◇ PSE mark: cables, breakers, outlets, plugs…',
    category: 'law',
  },
  {
    jp: '免状',
    explain:
      'The physical licence card issued once you pass both exams and apply for it. You must carry it while working, and the prefecture, not the exam body, issues it.',
    kana: 'めんじょう',
    romaji: 'menjō',
    en: 'licence card',
    note: 'Issued by the prefectural governor 都道府県知事; must be carried while working.',
    category: 'law',
  },
  {
    jp: '主任電気工事士',
    explain:
      'The qualified person a contracting firm must appoint at each office to take responsibility for the work. A second-class holder qualifies after three years on the tools.',
    kana: 'しゅにんでんきこうじし',
    romaji: 'shunin denki kōjishi',
    en: 'chief electrician (of a business office)',
    note: '2nd-class + 3 years’ experience, or 1st-class.',
    category: 'law',
  },
  {
    jp: '認定電気工事従事者',
    explain:
      'An extra certificate that lets a second-class holder work on the low-voltage side of a high-voltage customer installation, which the plain licence does not cover.',
    kana: 'にんていでんきこうじじゅうじしゃ',
    romaji: 'nintei denki kōji jūjisha',
    en: 'certified electrical worker',
    note: 'Lets a 2nd-class holder work on ≤ 600 V parts of a 自家用 installation.',
    category: 'law',
  },
  {
    jp: '軽微な工事',
    explain:
      'Jobs the law does not count as electrical work at all, so anyone may do them — fitting a plug to a flex, wiring a doorbell on the low-voltage side.',
    kana: 'けいびなこうじ',
    romaji: 'keibi na kōji',
    en: 'minor work (not “electrical work”)',
    note: 'No licence needed — e.g. attaching a plug to a cord.',
    category: 'law',
  },
  {
    jp: '軽微な作業',
    explain:
      'Jobs that are part of electrical work but are exempt from needing a licence, such as screwing a wire onto the terminal of an appliance. The distinction from 軽微な工事 is a favourite exam trap.',
    kana: 'けいびなさぎょう',
    romaji: 'keibi na sagyō',
    en: 'minor operations',
    note: 'Part of electrical work but exempt from the licence requirement.',
    category: 'law',
  },
  {
    jp: '都道府県知事',
    explain:
      'The prefectural governor — the official who actually issues and reissues your licence card. Applications go to the prefecture, not to central government.',
    kana: 'とどうふけんちじ',
    romaji: 'todofuken chiji',
    en: 'prefectural governor',
    category: 'law',
  },
  {
    jp: '経済産業大臣',
    explain:
      'The national minister responsible for the electricity laws. Appears in questions about who authorises what at the national level.',
    kana: 'けいざいさんぎょうだいじん',
    romaji: 'keizai sangyō daijin',
    en: 'Minister of Economy, Trade and Industry',
    category: 'law',
  },

  /* --------------------------------------------------------- practical */
  {
    jp: '技能試験',
    explain:
      'The second half of the exam: you are given materials and a drawing and must build the circuit by hand in forty minutes.',
    kana: 'ぎのうしけん',
    romaji: 'ginō shiken',
    en: 'practical (hands-on) exam',
    category: 'practical',
  },
  {
    jp: '候補問題',
    explain:
      'The thirteen tasks published months in advance, one of which will be set on the day. You can and should practise all thirteen beforehand.',
    kana: 'こうほもんだい',
    romaji: 'kōho mondai',
    en: 'candidate problem',
    note: '13 are published in advance; one is used.',
    category: 'practical',
  },
  {
    jp: '施工条件',
    explain:
      'The written instructions accompanying the drawing — which colours to use where, which connector in which box. They override your habits, and ignoring them is an automatic fail.',
    kana: 'せこうじょうけん',
    romaji: 'sekō jōken',
    en: 'installation conditions',
    note: 'Read it twice — it overrides your habits.',
    category: 'practical',
  },
  {
    jp: '支給材料',
    explain:
      'The cable, boxes and fittings handed to you in the exam. Check them against the list before you start, because you get no replacements for a piece you cut wrong.',
    kana: 'しきゅうざいりょう',
    romaji: 'shikyū zairyō',
    en: 'supplied materials',
    category: 'practical',
  },
  {
    jp: '欠陥',
    explain:
      'A defect against the published judging criteria. There are no marks out of ten: one defect anywhere in your work and you fail the whole task.',
    kana: 'けっかん',
    romaji: 'kekkan',
    en: 'defect',
    note: 'One defect = fail. There is no partial credit.',
    category: 'practical',
  },
  {
    jp: '圧着マーク',
    explain:
      'The symbol the crimping tool stamps into a ring sleeve, recording which die was used. Examiners read it to check you picked the right size for the number of wires.',
    kana: 'あっちゃくマーク',
    romaji: 'atchaku māku',
    en: 'crimp die mark',
    note: '○ / 小 / 中 / 大.',
    category: 'practical',
  },
  {
    jp: '輪作り',
    explain:
      'Bending a bared conductor into a neat ring to go under a terminal screw. It must curl clockwise so tightening the screw closes the loop rather than pushing it out.',
    kana: 'わづくり',
    romaji: 'wazukuri',
    en: 'forming a terminal loop',
    note: 'Clockwise under the screw.',
    category: 'practical',
  },
  {
    jp: '剥ぎ取り',
    explain:
      'Removing the outer sheath to expose the cores. How much you take off is specified in millimetres, and both too little and too much count as defects.',
    kana: 'はぎとり',
    romaji: 'hagitori',
    en: 'stripping the sheath',
    category: 'practical',
  },

  /* -------------------------------------------------------------- exam */
  {
    jp: '学科試験',
    explain:
      'The written half of the exam: fifty multiple-choice questions in two hours. Pass this and you go on to the practical.',
    kana: 'がっかしけん',
    romaji: 'gakka shiken',
    en: 'written (academic) exam',
    note: 'Formerly called 筆記試験.',
    category: 'exam',
  },
  {
    jp: 'CBT方式',
    explain:
      'Sitting the written exam on a computer at a test centre, on a date you choose within a window, instead of on paper on one fixed day.',
    kana: 'シービーティーほうしき',
    romaji: 'shī-bī-tī hōshiki',
    en: 'computer-based testing',
    category: 'exam',
  },
  {
    jp: '上期',
    explain:
      'The first of the two annual sittings, in the first half of the year. Each sitting has its own application window months ahead.',
    kana: 'じょうき',
    romaji: 'jōki',
    en: 'first-half (spring) sitting',
    category: 'exam',
  },
  {
    jp: '下期',
    explain:
      'The second annual sitting, in the latter half of the year. Failing the first does not stop you trying again the same year.',
    kana: 'かき',
    romaji: 'kaki',
    en: 'second-half (autumn) sitting',
    category: 'exam',
  },
  {
    jp: '受験申込',
    explain:
      'Signing up for the exam, online or on paper, inside a window that closes well before the exam. Anyone may apply — no experience, no sponsor, no Japanese-language requirement.',
    kana: 'じゅけんもうしこみ',
    romaji: 'juken mōshikomi',
    en: 'exam application',
    category: 'exam',
  },
  {
    jp: '合格基準',
    explain:
      'The mark needed to pass, around sixty per cent — about thirty of the fifty written questions. Confirmed for each sitting rather than fixed forever.',
    kana: 'ごうかくきじゅん',
    romaji: 'gōkaku kijun',
    en: 'pass standard',
    note: 'Around 60 % (30 of 50) on the written paper.',
    category: 'exam',
  },
  {
    jp: '電気技術者試験センター',
    explain:
      'The organisation that runs the exam, publishes the thirteen practical tasks and the judging criteria, and announces the results. Its site is the authority on dates and fees.',
    kana: 'でんきぎじゅつしゃしけんセンター',
    romaji: 'denki gijutsusha shiken sentā',
    en: 'Electrical Engineers Examination Center (ECEE)',
    note: 'The body that runs the exam.',
    category: 'exam',
  },
];
