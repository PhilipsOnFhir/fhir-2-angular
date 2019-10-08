import { AdministrableProductDefinition_TargetSpecies } from './AdministrableProductDefinition_TargetSpecies'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Ratio } from './Ratio'

export class AdministrableProductDefinition_RouteOfAdministration      extends BackboneElement
{

   static def : string = 'AdministrableProductDefinition_RouteOfAdministration';
   code : CodeableConcept ;
   firstDose : Quantity ;
   maxSingleDose : Quantity ;
   maxDosePerDay : Quantity ;
   maxDosePerTreatmentPeriod : Ratio ;
   maxTreatmentPeriod : string ;
   targetSpecies : AdministrableProductDefinition_TargetSpecies [];
}
