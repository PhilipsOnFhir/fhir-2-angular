import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MedicinalProductPharmaceutical_Characteristics } from './R5_MedicinalProductPharmaceutical_Characteristics'
import { R5_MedicinalProductPharmaceutical_RouteOfAdministration } from './R5_MedicinalProductPharmaceutical_RouteOfAdministration'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductPharmaceutical      extends R5_DomainResource
{

   static def : string = 'MedicinalProductPharmaceutical';
   identifier : R5_Identifier [];
   administrableDoseForm : R5_CodeableConcept ;
   unitOfPresentation : R5_CodeableConcept ;
   ingredient : R5_Reference [];
   device : R5_Reference [];
   characteristics : R5_MedicinalProductPharmaceutical_Characteristics [];
   routeOfAdministration : R5_MedicinalProductPharmaceutical_RouteOfAdministration [];
}
