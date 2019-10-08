import { AdministrableProductDefinition_WithdrawalPeriod } from './AdministrableProductDefinition_WithdrawalPeriod'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class AdministrableProductDefinition_TargetSpecies      extends BackboneElement
{

   static def : string = 'AdministrableProductDefinition_TargetSpecies';
   code : CodeableConcept ;
   withdrawalPeriod : AdministrableProductDefinition_WithdrawalPeriod [];
}
