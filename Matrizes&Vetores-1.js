
//Faz a leitra e mosta os elementos dos vetores e matrizes
function Vetores_Matrizes() {
    let vet1 = [1, 2, 3, 4, 5];
    let vet2 = [4, 7, 3, 6, 8];

    let matriz = [[1, 2, 3], 
                  [3, 2, 1], 
                  [4, 8, 9]];

    let tam1 = vet1.length;
    let tamMatriz = matriz.length;                   // tamanho da matriz
    console.log("tamanho da matriz " + tamMatriz);


    for (let i = 0; i < tam1; i++) {                 // mostrando os elementos do vetor
        console.log(vet1[i]);
    }

    //andando pela matriz
    for (let i = 0; i < tamMatriz; i++) {            // tamMatriz = o numero de linhas
        for (let j = 0; j < matriz[i].length; j++) { // aqui andamos pelas colunas com o indice j
            console.log(matriz[i][j]);               // matriz i = 0 , j = 0 -> 
        }                                            //        i = 0 , j = 1 ->
    }                                                //        i = 0 , j = 2 -> muda a linha apos isso (NESSE CASO)


    for (let i = 0; i < tamMatriz; i++) {      
        console.log(matriz[i])
    }
    
    let lin = 0;
    let col = 0;

    while(lin < tamMatriz){                        // Cont ira percorrer as linhas
        
        while(col < matriz[lin].length){                                    
            console.log(matriz[lin][col])
            col++;
        }
        col = 0;                                   // reinicia a coluna para a proxima linha 
        lin++;                                     // pula para prox linha
    }


}
//Soma os elemntos da diagonal esq e dir sem repetir o elemento central
function somaDiagonais(tab) { 
    
    let i = 0; 
    let som = 0; 
    let c = 0; 
    let d = 0; 
 

    let j = 0;
    while(tab[0][j] != undefined){
        j++;                                     //tamanho das colunas 5
    }

    
    while(tab[i]!=undefined) 
      { 
        j--;
        if(i != j){
            //console.log("valores daigonal ESQ" +tab[i][i]);
            c = c + tab[i][i];          // tab[0][0] -> tab[1][1]
            //console.log("valores daigonal Dir "+tab[i][j-i]);
            d = d + tab[i][j];          // tab[0][4] -> tab[1][3] 
        }else{
            c = c + tab[i][i];          // tab[0][0] -> tab[1][1]
        }
        i++;
      } 
    console.log(d);           
    console.log(c);            

    som = d + c;                // som = 6 + 0
    
    return som ; 
} 

//Pega o tamanho da matriz
function tamanhoMatriz(matriz){
    let j = 0;
    while(matriz[0][j] != undefined){
        j++;                                     //tamanho das colunas 5
    }
    return j;                                  // ja decrementei 1 do tamanho pra ficar certo
}

// Algoritmo para leitura de uma matriz em Z
function leituraEmZ(matriz) {
    const numLinhas = matriz.length;
    const numColunas = matriz[0].length;

    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numColunas; j++) {
            if (i === 0 || i === numLinhas - 1 || j === numColunas - i - 1) {
                console.log(matriz[i][j]);
            } else {
                console.log(" ");
            }
        }
    }
}

//Multiplicando os elementos da diagonal de uma matriz
function multDiagonal(matriz){                      
    let soma = 0;
    let  tamMatriz = matriz.length; 

    for (let i = 0; i < tamMatriz; i++) {          
        console.log(matriz[i][i]);                // matriz[0][0] -> matriz[1][1] -> matriz[3][3]
        soma += matriz[i][i];                                
    }   
    console.log("soma dos elementos da diagonal: " + soma); 
    return;
}

//Soma os elementos da matriz
function somaMatriz(matriz){
    let lin = 0;
    let col = 0;
    let soma = 0;
    let  tamMatriz = matriz.length; 

        while(lin < tamMatriz){                        // Cont ira percorrer as linhas
            while(col < matriz[lin].length){                                    
                soma += matriz[lin][col];
                col++;
            }
            col = 0;                                   // reinicia a coluna para a proxima linha 
            lin++;                                     // pula para prox linha
        }
    
        console.log("Soma das linhas das matrizes: " + soma );
    return;
}

//Mostra a quantidade de linhas e colunas 
function linhaColuna(matriz) {
    let tamL = 0;
    while(matriz[tamL] !== undefined){               //tamanho das linhas
        tamL++;
    }

    let tamC = 0;
    while(matriz[0][tamC] !== undefined){
        tamC++;                                     //tamanho das colunas
    }

    console.log("tamanho da matrix " + tamL + "x" + tamC);
}








