import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DeviceComponent_ProductionSpecification } from './R4_DeviceComponent_ProductionSpecification'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_DeviceComponent      extends R4_DomainResource
{

   static def : string = 'DeviceComponent';
   type : R4_CodeableConcept ;
   identifier : R4_Identifier ;
   lastSystemChange : string ;
   source : R4_Reference ;
   parent : R4_Reference ;
   operationalStatus : R4_CodeableConcept [];
   parameterGroup : R4_CodeableConcept ;
   measurementPrinciple : string ;
   productionSpecification : R4_DeviceComponent_ProductionSpecification [];
   languageCode : R4_CodeableConcept ;
}
