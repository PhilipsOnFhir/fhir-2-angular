import { DSTU2_ClaimTypeEnum } from './DSTU2_ClaimTypeEnum'
import { DSTU2_Claim_Coverage } from './DSTU2_Claim_Coverage'
import { DSTU2_Claim_Diagnosis } from './DSTU2_Claim_Diagnosis'
import { DSTU2_Claim_Item } from './DSTU2_Claim_Item'
import { DSTU2_Claim_MissingTeeth } from './DSTU2_Claim_MissingTeeth'
import { DSTU2_Claim_Payee } from './DSTU2_Claim_Payee'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_UseEnum } from './DSTU2_UseEnum'

export class DSTU2_Claim      extends DSTU2_DomainResource
{

   static def : string = 'Claim';
   type : DSTU2_ClaimTypeEnum ;
   identifier : DSTU2_Identifier [];
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   target : DSTU2_Reference ;
   provider : DSTU2_Reference ;
   organization : DSTU2_Reference ;
   use : DSTU2_UseEnum ;
   priority : DSTU2_Coding ;
   fundsReserve : DSTU2_Coding ;
   enterer : DSTU2_Reference ;
   facility : DSTU2_Reference ;
   prescription : DSTU2_Reference ;
   originalPrescription : DSTU2_Reference ;
   payee : DSTU2_Claim_Payee ;
   referral : DSTU2_Reference ;
   diagnosis : DSTU2_Claim_Diagnosis [];
   condition : DSTU2_Coding [];
   patient : DSTU2_Reference ;
   coverage : DSTU2_Claim_Coverage [];
   exception : DSTU2_Coding [];
   school : string ;
   accident : string ;
   accidentType : DSTU2_Coding ;
   interventionException : DSTU2_Coding [];
   item : DSTU2_Claim_Item [];
   additionalMaterials : DSTU2_Coding [];
   missingTeeth : DSTU2_Claim_MissingTeeth [];
}
