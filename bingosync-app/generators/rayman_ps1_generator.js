(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

    // simpler generator that just does a random choice without duplicates
    Math.seedrandom(SEED);
    if (true) {
        var usedGoals = {};
        var bingoBoard = [];

        for (var i = 1; i <= 25; i++) {
            var randIndex = Math.floor(Math.random() * bingoList.length);
            while (usedGoals[randIndex]) {
                randIndex = Math.floor(Math.random() * bingoList.length);
            }
            usedGoals[randIndex] = true;

            var goal = bingoList[randIndex];
            bingoBoard[i] = {"name": goal};
        }

        return bingoBoard;
    }
};

var bingoList = [
    "All Powerups",
    "20 Lives",
    "10 Lives",
    "00 Lives",
    "15 Lives",
    "1 Cage in PPW",
    "1 Cage in AL",
    "1 Cage in TSOF",
    "1 Cage in MN",
    "1 Cage in BH",
    "1 Cage in AP",
    "1 Cage in GH",
    "1 Cage in MSH",
    "1 Cage in TG",
    "1 Cage in THR",
    "1 Cage in MSP",
    "1 Cage in EP",
    "1 Cage in PP",
    "1 Cage in SMC",
    "1 Cage in CP",
    "1 Cage in EAJ",
    "1 Cage in MSS",
    "2 Cages in PPW",
    "2 Cages in AL",
    "2 Cages in TSOF",
    "2 Cages in MN",
    "2 Cages in BH",
    "2 Cages in AP",
    "2 Cages in GH",
    "2 Cages in MSH",
    "2 Cages in TG",
    "2 Cages in THR",
    "2 Cages in MSP",
    "2 Cages in EP",
    "2 Cages in PP",
    "2 Cages in SMC",
    "2 Cages in CP",
    "2 Cages in EAJ",
    "2 Cages in MSS",
    "3 Cages in PPW",
    "3 Cages in AL",
    "3 Cages in TSOF",
    "3 Cages in MN",
    "3 Cages in BH",
    "3 Cages in AP",
    "3 Cages in GH",
    "3 Cages in MSH",
    "3 Cages in TG",
    "3 Cages in THR",
    "3 Cages in MSP",
    "3 Cages in EP",
    "3 Cages in PP",
    "3 Cages in SMC",
    "3 Cages in CP",
    "3 Cages in EAJ",
    "3 Cages in MSS",
    "4 Cages in PPW",
    "4 Cages in AL",
    "4 Cages in TSOF",
    "4 Cages in MN",
    "4 Cages in BH",
    "4 Cages in AP",
    "4 Cages in GH",
    "4 Cages in MSH",
    "4 Cages in TG",
    "4 Cages in THR",
    "4 Cages in MSP",
    "4 Cages in EP",
    "4 Cages in PP",
    "4 Cages in SMC",
    "4 Cages in CP",
    "4 Cages in EAJ",
    "4 Cages in MSS",
    "5 Cages in PPW",
    "5 Cages in AL",
    "5 Cages in TSOF",
    "5 Cages in MN",
    "5 Cages in BH",
    "5 Cages in AP",
    "5 Cages in GH",
    "5 Cages in MSH",
    "5 Cages in TG",
    "5 Cages in THR",
    "5 Cages in MSP",
    "5 Cages in EP",
    "5 Cages in PP",
    "5 Cages in SMC",
    "5 Cages in CP",
    "5 Cages in EAJ",
    "5 Cages in MSS",
    "All Cages in PPW",
    "All Cages in AL",
    "All Cages in TSOF",
    "All Cages in MN",
    "All Cages in BH",
    "All Cages in AP",
    "All Cages in GH",
    "All Cages in MSH",
    "All Cages in TG",
    "All Cages in THR",
    "All Cages in MSP",
    "All Cages in EP",
    "All Cages in PP",
    "All Cages in SMC",
    "All Cages in CP",
    "All Cages in EAJ",
    "All Cages in MSS",
    "Beat Bzzit",
    "Beat Moskito",
    "Beat Mr Sax",
    "Beat Mr Stone",
    "Beat Viking Mama",
    "Beat Space Mama",
    "Beat Mr Skops",
    "Pick up 1 Speed Fist",
    "Pick up 2 Speed Fists",
    "Pick up 3 Speed Fists",
    "Pick up 4 Speed Fists",
    "Pick up 5 Speed Fists",
    "Pick up 6 Speed Fists",
    "Pick up 7 Speed Fists",
    "Pick up 8 Speed Fists",
    "Pick up 9 Speed Fists",
    "Pick up 10 Speed Fists",
    "Pick up 1 Gold Fist",
    "Pick up 2 Gold Fists",
    "Pick up 3 Gold Fists",
    "Pick up 4 Gold Fists",
    "Pick up 5 Gold Fists",
    "Pick up 6 Gold Fists",
    "Pick up 7 Gold Fists",
    "Pick up 8 Gold Fists",
    "Pick up 9 Gold Fists",
    "Pick up 10 Gold Fists",
    "Meet Tarayzan",
    "Meet The Musician",
    "Meet Joe",
    "Finish a Level with 10 Tings",
    "Finish a Level with 20 Tings",
    "Finish a Level with 30 Tings",
    "Finish a Level with 40 Tings",
    "Finish a Level with 50 Tings",
    "Finish a Level with 60 Tings",
    "Finish a Level with 70 Tings",
    "Finish a Level with 80 Tings",
    "Finish a Level with 90 Tings",
    "Finish a Level with 99 Tings",
    "Use 1 Continue",
    "Use 2 Continues",
    "Use 3 Continues",
    "Use 4 Continues",
    "Game Over 1 Time",
    "Complete both Magicians in PPW",
    "Complete the Magician in TSOF",
    "Complete the Magician in MN",
    "Complete the Magician in BH",
    "Complete the Magician in AP",
    "Complete the Magician in THR",
    "Complete the Magician in MSP",
    "Complete the Magician in EP",
    "Complete the Magician in SMC",
    "Complete the Magician in CP",
    "All Cages in The Dream Forest",
    "All Cages in Band Land",
    "All Cages in Blue Mountains",
    "All Cages in Picture City",
    "All Cages in The Cave of Skops",
    "Softlock The Game 1 time"
]
