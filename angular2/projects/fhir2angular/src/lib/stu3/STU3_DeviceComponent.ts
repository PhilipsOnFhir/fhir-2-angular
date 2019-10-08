import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DeviceComponent_ProductionSpecification } from './STU3_DeviceComponent_ProductionSpecification'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MeasmntPrincipleEnum } from './STU3_MeasmntPrincipleEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DeviceComponent      extends STU3_DomainResource
{

   static def : string = 'DeviceComponent';
   identifier : STU3_Identifier ;
   type : STU3_CodeableConcept ;
   lastSystemChange : string ;
   source : STU3_Reference ;
   parent : STU3_Reference ;
   operationalStatus : STU3_CodeableConcept [];
   parameterGroup : STU3_CodeableConcept ;
   measurementPrinciple : STU3_MeasmntPrincipleEnum ;
   productionSpecification : STU3_DeviceComponent_ProductionSpecification [];
   languageCode : STU3_CodeableConcept ;
}
