import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class AdministrableProductDefinition_WithdrawalPeriod      extends BackboneElement
{

   static def : string = 'AdministrableProductDefinition_WithdrawalPeriod';
   tissue : CodeableConcept ;
   value : Quantity ;
   supportingInformation : string ;
}
