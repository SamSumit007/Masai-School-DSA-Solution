function symmetricOrNot(n, mat) {

    function checkHori(n, mat) {
        var i = 0;
        var j = n - 1;

        while (i < j) {
            for (var k = 0; k < n; k++) {
                if (mat[i][k] != mat[j][k]) {
                    return false;
                }
            }
            i++;
            j--;
        }
        return true;

    }

    function checkVert(n, mat) {
        var i = 0;
        var j = n - 1;

        while (i < j) {
            for (var k = 0; k < n; k++) {
                if (mat[k][i] != mat[k][j]) {
                    return false;
                }
            }
            i++;
            j--;
        }
        return true;
    }

    if (checkHori(n, mat) && checkVert(n, mat)) {
        console.log("YES");
    } else {
        console.log("NO");
    }


}
