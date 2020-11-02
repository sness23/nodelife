const width = 400
const height = 300
let gen = 0;

function update(a,b) {
    for (y = 0; y < height; y++) {
        yyy = y * width;
        ym1 = ((y + height - 1) % height) * width
        yp1 = ((y + 1) % height) * width
        xm1 = width - 1
        for (x = 0; x < width; x++) {
            xp1 = (x + 1) % width
            neighbours = (
                a[xm1 + ym1] + a[xm1 + yyy] + a[xm1 + yp1] +
                    a[x + ym1] + a[x + yp1] +
                    a[xp1 + ym1] + a[xp1 + yyy] + a[xp1 + yp1])
            if (neighbours == 3 || (neighbours == 2 && a[yyy+x])) {
                b[yyy+x] = 1
            } else {
                b[yyy+x] = 0
            }
            xm1 = x
        }
    }
}

function print(a) {
    console.clear()
    for (y = 0; y < height; y++) {
        yyy = y * width;
        process.stdout.write("|")
        for (x = 0; x < width; x++) {
            c = a[yyy+x] == 0 ? " " : "+"
            process.stdout.write(c)
        }
        process.stdout.write("|\n")
    }
}

curr = Array.from({length: width * height},
                  () => Math.floor(Math.random() * 2))
next = Array.from({length: width * height},
                  () => Math.floor(Math.random() * 2))
while (true) {
    update(curr,next)
    print(next)
    update(next,curr)
    print(curr)
    gen++
}
