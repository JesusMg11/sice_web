import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatBadgeModule } from  '@angular/material/badge';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { InformacionComponent } from './informacion/informacion.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { AdminComponent } from './admin/admin.component';
import { MaestrosAdminComponent } from './maestros-admin/maestros-admin.component';
import { AvisosComponent } from './avisos/avisos.component';
import { GruposComponent } from './grupos/grupos.component';
import { AlumnosAdminComponent } from './alumnos-admin/alumnos-admin.component';
import { InicioMaestrosComponent } from './inicio-maestros/inicio-maestros.component';
import { CalificacionesMaestrosComponent } from './calificaciones-maestros/calificaciones-maestros.component';

const rutas: Route[] = [
  {path:'inicio', component: InicioComponent},
  {path:'estudiantes', component: EstudiantesComponent},
  {path:'calificaciones', component: CalificacionesComponent},
  {path:'registro', component: RegistroComponent},
  {path:'informacion', component: InformacionComponent},
  {path:'admin', component: AdminComponent},
  {path:'maestros', component: MaestrosComponent},
  {path:'maestrosAdmin', component: MaestrosAdminComponent},
  {path:'avisos', component: AvisosComponent},
  {path:'grupos', component: GruposComponent},
  {path:'estudiantesAdmin', component: AlumnosAdminComponent},
  {path:'inicioMaestros', component: InicioMaestrosComponent},
  {path:'calificacionesMaestros', component: CalificacionesMaestrosComponent},
  {path:'', component: InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    InicioComponent,
    RegistroComponent,
    CalificacionesComponent,
    InformacionComponent,
    MaestrosComponent,
    AdminComponent,
    MaestrosAdminComponent,
    AvisosComponent,
    GruposComponent,
    AlumnosAdminComponent,
    InicioMaestrosComponent,
    CalificacionesMaestrosComponent
  ],
  imports: [
    CKEditorModule,
    NgSelectModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatBadgeModule,
    FormsModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
