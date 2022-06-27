import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BikesService} from "../service/bikes-service.service";
import {Bike} from "../model/bike.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-bikes-add',
  templateUrl: './bikes-add.component.html',
  styleUrls: ['./bikes-add.component.scss']
})
export class BikesAddComponent implements OnInit {

  editForm = this.fb.group({
    id: [],
    nome: ['',[Validators.required]],
    marca: ['',[Validators.required]],
    preco: ['',[Validators.required, Validators.min(0.01)]],
    imagem: [''],
    site: ['']
  })

  constructor(protected activatedRoute: ActivatedRoute,
              protected bikesService: BikesService,
              protected fb: FormBuilder,
              protected router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bikeId = params['id'];
      if (bikeId) {
        this.bikesService.get(bikeId)
          .subscribe(response => {
            this.updateForm(response);
          });
      }
    })
  }

  setImage(event: any): void {
    const file: File | undefined = event.target?.files?.[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file!);
    fileReader.onload = ((e) => {
      console.log(e.target?.result);
      if ( typeof e.target?.result === 'string') {
        const base64: string = e.target?.result?.substr(e.target?.result.indexOf('base64,') + 'base64,'.length);
        this.editForm.patchValue({
          imagem: base64
        })
      }
    });
  }

  save() : void {
    const bike: Bike = this.create();
    if (!bike.id) {
      this.bikesService.add(bike).subscribe(response => this.sucess());
    } else {
      this.bikesService.update(bike).subscribe(response => this.sucess());
    }
  }

  private updateForm(bike: Bike): void {
    this.editForm.patchValue({
      id: bike.id,
      nome: bike.nome,
      marca: bike.marca,
      preco: bike.preco,
      imagem: bike.imagem,
      site: bike.site
    });
  }

  private create(): Bike {
    return new Bike(
      this.editForm.get(['id'])!.value,
      this.editForm.get(['nome'])!.value,
      this.editForm.get(['marca'])!.value,
      this.editForm.get(['imagem'])!.value,
      this.editForm.get(['preco'])!.value,
      this.editForm.get(['site'])!.value);
  }

  private sucess(): void {
    this.router.navigate(['/bikes']);
  }
}
