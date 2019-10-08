import { R4_DomainResource } from './R4_DomainResource'
import { R4_Linkage_Item } from './R4_Linkage_Item'
import { R4_Reference } from './R4_Reference'

export class R4_Linkage      extends R4_DomainResource
{

   static def : string = 'Linkage';
   active : boolean ;
   author : R4_Reference ;
   item : R4_Linkage_Item [];
}
