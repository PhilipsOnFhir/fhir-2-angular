import { R4_1_AccountStatusEnum } from './R4_1_AccountStatusEnum'
import { R4_1_Account_Coverage } from './R4_1_Account_Coverage'
import { R4_1_Account_Guarantor } from './R4_1_Account_Guarantor'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Account      extends R4_1_DomainResource
{

   static def : string = 'Account';
   identifier : R4_1_Identifier [];
   status : R4_1_AccountStatusEnum ;
   type : R4_1_CodeableConcept ;
   name : string ;
   subject : R4_1_Reference [];
   servicePeriod : R4_1_Period ;
   coverage : R4_1_Account_Coverage [];
   owner : R4_1_Reference ;
   description : string ;
   guarantor : R4_1_Account_Guarantor [];
   partOf : R4_1_Reference ;
}
