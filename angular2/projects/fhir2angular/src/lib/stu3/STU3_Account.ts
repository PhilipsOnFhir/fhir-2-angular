import { STU3_AccountStatusEnum } from './STU3_AccountStatusEnum'
import { STU3_Account_Coverage } from './STU3_Account_Coverage'
import { STU3_Account_Guarantor } from './STU3_Account_Guarantor'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Account      extends STU3_DomainResource
{

   static def : string = 'Account';
   identifier : STU3_Identifier [];
   status : STU3_AccountStatusEnum ;
   type : STU3_CodeableConcept ;
   name : string ;
   subject : STU3_Reference ;
   period : STU3_Period ;
   active : STU3_Period ;
   balance : string ;
   coverage : STU3_Account_Coverage [];
   owner : STU3_Reference ;
   description : string ;
   guarantor : STU3_Account_Guarantor [];
}
