import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Contract_Actor } from './DSTU2_Contract_Actor'
import { DSTU2_Contract_Friendly } from './DSTU2_Contract_Friendly'
import { DSTU2_Contract_Legal } from './DSTU2_Contract_Legal'
import { DSTU2_Contract_Rule } from './DSTU2_Contract_Rule'
import { DSTU2_Contract_Signer } from './DSTU2_Contract_Signer'
import { DSTU2_Contract_Term } from './DSTU2_Contract_Term'
import { DSTU2_Contract_ValuedItem } from './DSTU2_Contract_ValuedItem'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Contract      extends DSTU2_DomainResource
{

   static def : string = 'Contract';
   identifier : DSTU2_Identifier ;
   issued : string ;
   applies : DSTU2_Period ;
   subject : DSTU2_Reference [];
   authority : DSTU2_Reference [];
   domain : DSTU2_Reference [];
   type : DSTU2_CodeableConcept ;
   subType : DSTU2_CodeableConcept [];
   action : DSTU2_CodeableConcept [];
   actionReason : DSTU2_CodeableConcept [];
   actor : DSTU2_Contract_Actor [];
   valuedItem : DSTU2_Contract_ValuedItem [];
   signer : DSTU2_Contract_Signer [];
   term : DSTU2_Contract_Term [];
   bindingAttachment : DSTU2_Attachment ;
   bindingReference : DSTU2_Reference ;
   friendly : DSTU2_Contract_Friendly [];
   legal : DSTU2_Contract_Legal [];
   rule : DSTU2_Contract_Rule [];
}
