import { AdministrableProductDefinition_Characteristic } from './AdministrableProductDefinition_Characteristic'
import { AdministrableProductDefinition_RouteOfAdministration } from './AdministrableProductDefinition_RouteOfAdministration'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class AdministrableProductDefinition      extends DomainResource
{

   static def : string = 'AdministrableProductDefinition';
   identifier : Identifier [];
   subject : Reference [];
   administrableDoseForm : CodeableConcept ;
   unitOfPresentation : CodeableConcept ;
   ingredient : Reference [];
   device : Reference [];
   characteristic : AdministrableProductDefinition_Characteristic [];
   routeOfAdministration : AdministrableProductDefinition_RouteOfAdministration [];
}
