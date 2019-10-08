import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_InsurancePlan_Contact } from './R4_1_InsurancePlan_Contact'
import { R4_1_InsurancePlan_Coverage } from './R4_1_InsurancePlan_Coverage'
import { R4_1_InsurancePlan_Plan } from './R4_1_InsurancePlan_Plan'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_InsurancePlan      extends R4_1_DomainResource
{

   static def : string = 'InsurancePlan';
   identifier : R4_1_Identifier [];
   status : R4_1_PublicationStatusEnum ;
   type : R4_1_CodeableConcept [];
   name : string ;
   alias : string [];
   period : R4_1_Period ;
   ownedBy : R4_1_Reference ;
   administeredBy : R4_1_Reference ;
   coverageArea : R4_1_Reference [];
   contact : R4_1_InsurancePlan_Contact [];
   endpoint : R4_1_Reference [];
   network : R4_1_Reference [];
   coverage : R4_1_InsurancePlan_Coverage [];
   plan : R4_1_InsurancePlan_Plan [];
}
