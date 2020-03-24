import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  variantes = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

  constructor() {}

  ngOnInit() {}
}
