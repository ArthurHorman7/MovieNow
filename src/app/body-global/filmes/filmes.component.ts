import { Consultar } from './../../model/indicacao';
import { IndicacaoService } from './../../service/indicacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  i: string = ''
  t: string = ''
  indicaMovie?: Consultar
  resultMovie?: Consultar
  filmeExiste?: boolean

  constructor(
    private service: IndicacaoService
  ) { }

  ngOnInit(): void {}

  indicacaoFilmes() {
    const myArray = ['tt3076658', 'tt1707386', 'tt0198781', 'tt1853728', 'tt1798684', 'tt0878804', 'tt0083658', 'tt0114369', 'tt0137523', 'tt0110413', 'tt0485947', 'tt1569923', 'tt0120586', 'tt0062622', 'tt2948356', 'tt0068646', 'tt0045152', 'tt0047478', 'tt1205489', 'tt0350258', 'tt0363226', 'tt0434409', 'tt0172495', 'tt0183505', 'tt1798709', 'tt2582802', 'tt0120737', 'tt0075148', 'tt2024544', 'tt0112573', 'tt0119698', 'tt0120815', 'tt0498380', 'tt0393162', 'tt2980516', 'tt0109830', 'tt0119217', 'tt1392190', 'tt1172570', 'tt1291584', 'tt1663202', 'tt0110912', 'tt0361748', 'tt0075314', 'tt0266697', 'tt0401792', 'tt0816692', 'tt1182345', 'tt0169547', 'tt0094625', 'tt1121794', 'tt0103064', 'tt0095327', 'tt1001526', 'tt4633694', 'tt0910970', 'tt0964517', 'tt3315342', 'tt1136608', 'tt1454468', 'tt1454468', 'tt0139654', 'tt1037705', 'tt0174856', 'tt0405159', 'tt1798243', 'tt0407887', 'tt1613062'];
    var rand = Math.floor(Math.random() * myArray.length);
    this.i = myArray[rand];

    this.service.indicaFilmes(this.i).subscribe((result) => {
      this.indicaMovie = result
      console.log(this.indicaMovie)
    }, error => {
      console.log("Error na consulta")
    })



  }

  pesquisarFilmes() {
    this.service.consultarFilmes(this.t).subscribe((result) => {
      this.resultMovie = result
      if (this.resultMovie.Response == "True") {
        this.filmeExiste = true
      } else {
        this.filmeExiste = false
      }
      console.log(this.resultMovie)
    }, error => {
      console.log("Error na consulta")
    })
  }

}
