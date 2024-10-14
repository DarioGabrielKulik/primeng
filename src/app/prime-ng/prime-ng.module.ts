import { NgModule } from '@angular/core';

//Modulos
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  exports:[   
    SidebarModule,
    AvatarModule,
    ButtonModule,
    ToolbarModule,
    ListboxModule,
    TreeModule,
    TableModule,
    CardModule,
    ProgressSpinnerModule,
    DividerModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    AutoCompleteModule,
    FloatLabelModule,
    DropdownModule  
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
